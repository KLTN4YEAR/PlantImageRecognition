import React, {Component} from 'react';
import {
  Platform,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from '../public/styleSheets/styleTfliteView';
import {Icon} from 'react-native-elements';
import Tflite from 'tflite-react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-simple-toast';

let tflite = new Tflite();
const height = 350;
const width = 350;
const flower = 'Flower';

export default class ImagePickerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: null,
      source: null,
      imageHeight: height,
      imageWidth: width,
      recognitions: [],
      renderGallery: true,
      renderCamera: false,
      result: false,
    };
    this.onClickGallery = this.onClickGallery.bind(this);
    this.onClickCamera = this.onClickCamera.bind(this);
  }

  componentDidMount() {
    this.onClickGallery(flower);
  }

  //Set event click to move gallery mode
  onClickGallery(m) {
    if (this.state.renderCamera) {
      this.setState({renderCamera: false});
      this.setState({renderGallery: true});
    } else {
      this.setState({renderGallery: true});
    }
    this.onSelectModel(m);
  }

  //Set event click to move camera mode
  onClickCamera(m) {
    if (this.state.renderGallery) {
      this.setState({renderGallery: false});
      this.setState({renderCamera: true});
    } else {
      this.setState({renderCamera: true});
    }
    this.onSelectModel(m);
  }

  //Set up for model train (tflite file and list result by txt file)
  onSelectModel(model) {
    this.setState({model});
    switch (model) {
      case flower:
        var modelFile = 'models/lite_flowers_model_v3.tflite';
        var labelsFile = 'models/lite_flowers_model_v2.txt';
        break;
      default:
        var modelFile = 'models/lite_flowers_model_v1.tflite';
        var labelsFile = 'models/lite_flowers_model_v1.txt';
    }
    tflite.loadModel(
      {
        model: modelFile,
        labels: labelsFile,
      },
      (err, res) => {
        if (err) console.log(err);
        else console.log(res);
      },
    );
  }

  //Mode of select Image with Gallery
  onSelectImage() {
    const options = {
      cropping: true,
      compressImageQuality: 1.0,
      showCropFrame: true,
      showCropGuidelines: true,
      cropperToolbarTitle: 'Cắt ảnh',
      cropperToolbarColor: 'white',
      mediaType:'photo',
    };
    ImagePicker.openPicker(options)
      .then(image => {
        var path = Platform.OS === 'ios' ? image.uri : 'file://' + image.path;
        var w = image.width;
        var h = image.height;
        this.setState({
          source: {uri: path},
          imageHeight: (h * width) / w,
          imageWidth: width,
        });

        switch (this.state.model) {
          case flower:
            tflite.runModelOnImage(
              {
                path,
                imageMean: 128.0,
                imageStd: 128.0,
                numResults: 3,
                threshold: 0.05,
              },
              (err, res) => {
                if (err) console.log(err);
                else
                  this.setState({
                    recognitions: res,
                  });
              },
            );
        }
      })
      .catch(err => {
        Toast.show('Có lỗi xảy ra!');
      });
  }
  //Mode of get image from direct camera
  onLaunchCamera() {
    const options = {
      cropping: true,
      compressImageQuality: 1.0,
      showCropFrame: true,
      showCropGuidelines: true,
      cropperToolbarTitle: 'Cắt ảnh',
      cropperToolbarColor: 'white',
      mediaType: 'photo',
    };
    ImagePicker.openCamera(options)
      .then(image => {
        var path =
          Platform.OS === 'ios' ? image.uri : 'file://' + image.path;
        var w = image.width;
        var h = image.height;
        this.setState({
          source: {uri: path},
          imageHeight: (h * width) / w,
          imageWidth: width,
        });

        switch (this.state.model) {
          case flower:
            tflite.runModelOnImage(
              {
                path,
                imageMean: 128.0,
                imageStd: 128.0,
                numResults: 3,
                threshold: 0.05,
              },
              (err, res) => {
                if (err) console.log(err);
                else
                  this.setState({
                    recognitions: res,
                  });
              },
            );
        }
      })
      .catch(err => {
        Toast.show('Có lỗi xảy ra!');
      });
  }

  //Return result (list 3 flower most like)
  renderResults() {
    const {model, recognitions, imageHeight, imageWidth} = this.state;
    switch (model) {
      case flower:
        return recognitions.map((res, id) => {
          //Se lay res label de search theo ten hoa o day de ra ket qua chi tiet
          return (
            <TouchableOpacity
              key={id}
              style={styles.viewResult}
              onPress={() => this.props.navigation.navigate('PlantInfo')}>
              <Image
                source={{
                  uri:
                    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDQ8PDw8PDw8PDQ0NDw8PDw8NDw0NFREWFhURFRUYHSggGBolGxUVITEhJSk3Li4uFx8zODMuNygtLisBCgoKDg0NFxAQFS0dFR0tKy0tKystKystLSstKy0uLS0rLTcrKy0tKysrKy0rLS0tNy0rNy0rLSsrKy0uLS0rLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAEBAQADAQEAAAAAAAAAAAABAAIDBAUGB//EADUQAAICAQMBBwIFAwMFAAAAAAABAhEDBBIhMQUiQVFhcYETMgZCobHwkcHRFFJiBxUjJDT/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBf/EACYRAQEAAgEDAQkBAAAAAAAAAAABAhEhAzFBcRIiQlFhgZGxwRP/2gAMAwEAAhEDEQA/AP0BM0YRo5PWIozYhWrFGBTCOSysxYhG7JMwNgbsrM2VgasTFjYRuysxY2DTVjZiysGmrCwsrAbKzNhYVpsy2Fg2AtlZmwsLpqwbAAaasLAgECABCybMgNkBBQmNmLEDVmrOOzVhWrEyNhCNmRCGxTMlYG7KzNlYRuwM2KYGrKzJWBogskwNJhYWVgNgBWFTAiCgiIGkQBYXRsrCwbCaJWZsbC6TAmZsBsjO4QCxRhDYGrNWYGyDVmkYsSjRWZsQhsbMkgNkFlYQkBWBqysCASAgErAgEgEKhrxfS0m/IzN0m+tc15nFLOoztNPHkjTT8/IL6O4tiV9b8RlNba9KPL/1cYXB9FbjfNrqr8zrZ+0FG6+1U2/CPuUx6Vyr2sFctg8Pdcm68UjxsPacWrb6pqrPQx5ZZZJ01GuLdc+YMsMsbtomc88cdvDt/wBWzrtkJZkCAApbCwYANkZICQmUysg0KMjYGrGzIgaKzIhGrJMyJRoTFjYRogIIRsyQNNFYWQCVgQU2KMiFdTXavY1yueNr4Ul/KPO1cMiTVdxvdHa1KUH7dT0M2nU5q8Smk/ubVQ8+PE4NRoXHpPLKPLcUsSjFe8mqXsR0wsl08aedOLWRzjlX2WqhJP0q/PodPTarJHJJSUJxcUmoSeTbJPi1XKq+D1M2ivIk8m+06e9SksdeFJWunh8n5d+J+088NblhGc8UMU9kIxbgklXLrx/yZ8t59WYP0DDpVKcrm4Jy7kU09q4tyS8E+Pg+l0W2SUVkm0uG0kvdnw34Vz6jUYsOXK96lHJBpp1LGpOO5JLh/pyuUj6DSRyTjeNSUPywnPY6+Ekai55/6Y72+llmWNbMajVpSe52vfxsy2eRpHxtlH6Sjy21GDv5PRw7a7t+8urFcJjquWysyQXRArBsoiMkQSY2CJEGhMiijQgIQkAhEIEBogKyhECCETIgJAQCQEFIoyL6CkcOPmUm8jik+Fwkn/cJZYy4jk+o+nG10/VL+542s1kMWa8sd0OfyqTs9LSayWS1CGyCS70uK9FFf5Eas1duN6pznHGpLJaay5Nn0oQjtfCbbUua4qvU8XtL8OaPUTeTJjxZNq5yv6kYqPg3VKXNLrzTPpnhT4+6nbbXF+VL9jrdozhlhGMoOnux011bpS+K4+WSxr3crJrh08GgUG8McK+k8UayQpP6S4eOMK4S4VX4nBLRZPu0z2JvhLI9so+bi13X6I9FKGJYobptxcZOW5yk9sdvLfhXHsYyuMcn1E5QUm7in3cnHVrwfToGtycR1tLHfOsjUMseJUlLcl4vjr6nqY4OuHdeR5/+qxqUnFLdJU5NU2l4NnNj1SWJKFu2rfq34Bm+14dyv3oiUKh3pLe748FJ8/JpxSiubdL9gxMtsGWLCw0CIgiQmUzRBI0ZNIoUJlGghIiAhIghIBASIiiEBABIAEgIBBkIHz/bek3pngrtDUQX0pZGscpd6XWSj4pP2R9pqsdo+d7S0F3wZdpzHe0XaG7BiWLutQ3zbV7etr18TkzZpp/myQT7tRcqXV8rqfF6jJmwXslKK6UnxV3R6vZHaU55G56iEIyiri13YuqpK0172Ns+zp7esmppZMbalB95STS2vhq10fujrS1EHHbKTkn0fWX6G8+WUWmssJRdLdy7XsnyeX2pJ7nCMlFfde14pe1p9WFl07GXNuxwd1BzcHk6NRtp2uvgdzSZ3CVqO+HLhTSpLz8j8oyfiTP9WXSWNOlCfe4XTn+fJ+j9iY9+OM1Byjlwult+zck3069f51Bj15lw93HqJ5mlBJy/3dFjg/E9PMpxioxcElSp220ef2RgxQVQySlXXjbb9fU78M6trHGLlbuVtpfL/YrHU1vjtGWZZpt/mq/GuhlhQQCAUIISIUhMo0Ao0jKYoo0ICEREhAiIgiEBKJCwIBASAgEgASIDE1Z0tRhs9BnHKJGpXzGv0EXzJcePscmn0mGUdmPBJe8Eo/MmexqdOmmeLgeoeR4d0FjSu5RuW2/AjdvDsf8AaIRXEYTm6qLT2/5a9Tkl2XJrv/fVXTkpO76+nHWjkhUGsWLieSXMlzNpdZP0SO9h07jajOTjTi90rcW+W06tv5Gmd8PzrW/9P28+6O+OOU+UtjaVturfCqvPr1Pr9J2d9CGJN1H6dKaacIqKS7rjy015ntQ08Yycoxu1Hc5TlKTq76+51Jdlw3OcW4Ju1Bvuxb8k+ll0mMxl32cEdRjyNpYN3P3wktk159UdpTnspR2Y1xUuZRXsjGfHDiE1KL/LOFp+1rr7M6GXFkhKnlcovlcJOvJhq6vEengaSpNteb8TlZ1MEuDsxZCxWRCVBYmRIhFGbFAbGzKYgaEEJQoQIISAQhIiKIiIBIgASIgIiICAQCsSieJ29onOD22pU6atNfKPeOLNC0/ZkWV8X2DKOnnnyZpzlKko3JuTV/bH9D6/s6TeKMpVzykuEm3bPlcuj+o8npJ0cGXtzUYMWxbe47TadtLwZJeGMd3CPtHqO+4rnjmvCT6J/BibVSg+VJzVeXP8Z8L+Ge3pxjlnlcpyzSeRzVblNcLjpVJKjnzds5J45wfWWTepJ04c20v54l2s5m49fN2o4ReLInKSpxl13L1OHBnc5W/6eR5GBTyNOTbdJW+XR7Wkw0R1xj0sD4O1FnWxI7ESlbsgsgykTYWBEaRpMwjSA0jZhGkBoQIo0SMmkAiBBCREDSECKhIiAQIgEgICIiCoJdH7CDJR89oY3LKv+TPK7b0Nwk/Rs9rs2P8A5sy9UZ7cx1hl6qvlmfDON10/y+O7M0T+lHg9LDofM9Xs/R1ijx4HchpixvDH3Y6Wl0tHo4sVG4YjmjArYjE5EiSEJsERBAiBEQKNowjZRpCjCNhGiBCAiAoBEyICQCEJAJUREQEIEAoiICAQComRCjxuz41qc3ujP4g+2Ef900cmi/8Aqy/Bx9rc58MfdnPw5fBZ9f67mnw1CK9Eb+mc6XBUbdtuJQFI5KKgbcbQNHIYYGCIgrAgICjRlMUQaRpGUbQQoQIoRSAUAiBBCRIgpIiCIiIoSAgEQIIiIgqAisDydIv/AG8vsjGr72uxryhf7m9E71WZ+SSMaN79Zkn4RWxfHBj5OXier2ANAbdmSEABow0bYMDjIWJB17KyIKUaTAiDaZpMSCGysCKGzREAlZEENlZEFViRBFZWRANhYkBWVkRRWFiQBZmUqREKPF7PyU8+T/lL9Dm7Bh3JT8ZStkRjHu44d59/29WysiNu4sLIgCwbAiAsiID/2Q==',
                }}
                style={styles.imgFlow}
              />
              <View style={styles.viewTrend}>
                <Text style={styles.lblNameFlow}>{res['label']}</Text>
                <Text style={styles.lblPercent}>
                  {'Similarity: ' + (res['confidence'] * 10).toFixed(0) + '%'}
                </Text>
              </View>
            </TouchableOpacity>
          );
        });
    }
  }

  render() {
    const m = flower;
    if (this.state.renderGallery)
      return (
        <ScrollView style={styles.viewContainer}>
          <View style={styles.viewBtnChoose}>
            <TouchableOpacity
              onPress={this.onClickGallery.bind(this, m)}
              style={styles.btnChoose}>
              <Icon
                raised
                disabled
                name="image"
                type="font-awesome"
                color="#59c393"
              />
              <Text style={{color: 'white'}}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.onClickCamera.bind(this, m)}
              style={styles.btnChoose}>
              <Icon
                raised
                name="camera"
                type="font-awesome"
                color="#59c393"
              />
              <Text style={{color: 'white'}}>Camera</Text>
            </TouchableOpacity>
          </View>
          {this.renderModel()}
        </ScrollView>
      );
    if (this.state.renderCamera)
      return (
        <ScrollView style={styles.viewContainer}>
          <View style={styles.viewBtnChoose}>
            <TouchableOpacity
              onPress={this.onClickGallery.bind(this, m)}
              style={styles.btnChoose}>
              <Icon raised name="image" type="font-awesome" color="#59c393" />
              <Text>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.onClickCamera.bind(this, m)}
              style={styles.btnChoose}>
              <Icon
                raised
                disabled
                name="camera"
                type="font-awesome"
                color="#59c393"
              />
              <Text>Camera</Text>
            </TouchableOpacity>
          </View>
          {this.renderModel()}
        </ScrollView>
      );
  }

  //render model from gallery or camera
  renderModel() {
    const {
      model,
      recognitions,
      result,
      source,
      imageHeight,
      imageWidth,
    } = this.state;
    if (this.state.renderGallery)
      return (
        <View>
          {model ? (
            <View style={styles.viewModelContainer}>
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={this.onSelectImage.bind(this)}>
                {source ? (
                  <Image
                    source={source}
                    style={styles.imgSearch}
                    resizeMode="contain"
                  />
                ) : (
                  <View style={styles.viewEmpty}>
                    <Text>Chọn</Text>
                  </View>
                )}
              </TouchableOpacity>
              {source ? (
                <View style={styles.boxes}>
                  <View style={styles.lblSearchResult}>
                    <Text style={styles.lblResult}>Kết quả tìm kiếm</Text>
                  </View>
                  {this.renderResults()}
                </View>
              ) : (
                <Text>Không có kết quả</Text>
              )}
            </View>
          ) : (
            <View>
              <Text>Không có loài nào được chọn</Text>
            </View>
          )}
        </View>
      );
    if (this.state.renderCamera)
      return (
        <View>
          {model ? (
            <View style={styles.viewModelContainer}>
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={this.onLaunchCamera.bind(this)}>
                {source ? (
                  <Image
                    source={source}
                    style={styles.imgSearch}
                    resizeMode="contain"
                  />
                ) : (
                  <View style={styles.viewEmpty}>
                    <Text>Chụp</Text>
                  </View>
                )}
              </TouchableOpacity>
              {source ? (
                <View style={styles.boxes}>
                  <View style={styles.lblSearchResult}>
                    <Text style={styles.lblResult}>Kết quả tìm kiếm</Text>
                  </View>
                  {this.renderResults()}
                </View>
              ) : (
                <Text>Không có kết quả</Text>
              )}
            </View>
          ) : (
            <View>
              <Text>Không có loài nào được chọn</Text>
            </View>
          )}
        </View>
      );
  }
}
