import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from '../public/styleSheets/styleImagePicker';
import {Icon} from 'react-native-elements';
import {Col, Row, Grid} from 'react-native-easy-grid';

import Tflite from 'tflite-react-native';
//import ImagePicker from 'react-native-image-picker';

import ImagePicker from 'react-native-image-crop-picker';

let tflite = new Tflite();
const height = 350;
const width = 350;
const blue = '#25d5fd';
const flower = 'Flower';

export default class TfliteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: null,
      source: null,
      imageHeight: height,
      imageWidth: width,
      recognitions: [],
      renderGallery: false,
      renderCamera: false,
    };
    this.onClickGallery = this.onClickGallery.bind(this);
    this.onClickCamera = this.onClickCamera.bind(this);
  }
  onClickGallery() {
    if (this.state.renderCamera) {
      this.setState({renderCamera: false});
      this.setState({renderGallery: true});
    } else {
      this.setState({renderGallery: true});
    }
  }
  onClickCamera() {
    if (this.state.renderGallery) {
      this.setState({renderGallery: false});
      this.setState({renderCamera: true});
    } else {
      this.setState({renderCamera: true});
    }
  }
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

  onSelectImage() {
    const options = {
      width: 224,
      height: 224,
      cropping: true,
      compressImageQuality: 1.0,
    };
    ImagePicker.openPicker(options).then(image => {
       var path =
         Platform.OS === 'ios'
           ? image.uri
           : 'file://' + image.path;
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
    });
  }

  renderResults() {
    const {model, recognitions, imageHeight, imageWidth} = this.state;
    switch (model) {
      case flower:
        return recognitions.map((res, id) => {
          return (
            <Text key={id} style={{color: 'black', fontWeight: 'bold'}}>
              {res['label'] + '-' + (res['confidence'] * 10).toFixed(0) + '%'}
            </Text>
          );
        });
    }
  }

  render() {
    const {model, source, imageHeight, imageWidth} = this.state;
    var renderButtonGallery = m => {
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={this.onSelectModel.bind(this, m)}>
          <Text style={styles.buttonText}>{m}</Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.container}>
        {model ? (
          <TouchableOpacity
            style={[
              styles.imageContainer,
              {
                height: 224,
                width: 224,
                borderWidth: source ? 0 : 2,
              },
            ]}
            onPress={this.onSelectImage.bind(this)}>
            {source ? (
              <Image
                source={source}
                style={{
                  height: 224,
                  width: 224,
                }}
                resizeMode="contain"
              />
            ) : (
              <Text style={styles.text}>Select Picture</Text>
            )}
            <View style={styles.boxes}>{this.renderResults()}</View>
          </TouchableOpacity>
        ) : (
          <View>{renderButtonGallery(flower)}</View>
        )}
      </View>
    );
  }
}
