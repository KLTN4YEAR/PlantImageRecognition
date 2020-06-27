'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera-tflite';
import {styles} from '../public/styleSheets/styleRNCamera';
import {Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-simple-toast';

import {Steps, WingBlank} from '@ant-design/react-native';
const Step = Steps.Step;
class ImagePickerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      torchon: RNCamera.Constants.FlashMode.off,
    };
  }

  // state = {torchon: RNCamera.Constants.FlashMode.off};
  takePicture = async () => {
    if (this.camera) {
      const options = {
        quality: 1,
        base64: true,
      };
      const data = await this.camera.takePictureAsync(options);

      await ImagePicker.openCropper({
        path: data.uri,
        compressImageQuality: 1.0,
        showCropFrame: true,
        showCropGuidelines: true,
        cropperToolbarTitle: 'Cắt ảnh',
        cropperToolbarColor: 'white',
        mediaType: 'photo',
      })
        .then(image => {
          this.props.navigation.navigate('ResultBefore', {
            image: image,
          });
        })
        .catch(err => {
          Toast.show('Có lỗi xảy ra!');
        });
    }
  };

  //Mode of select Image with Gallery
  onSelectImage() {
    const options = {
      cropping: true,
      compressImageQuality: 1.0,
      showCropFrame: true,
      showCropGuidelines: true,
      cropperToolbarTitle: 'Cắt ảnh',
      cropperToolbarColor: 'white',
      mediaType: 'photo',
    };
    ImagePicker.openPicker(options)
      .then(image => {
        this.props.navigation.navigate('ResultBefore', {
          image: image,
        });
      })
      .catch(err => {
        Toast.show('Có lỗi xảy ra!');
      });
  }
  toggleTorch() {
    let tstate = this.state.torchon;
    if (tstate == RNCamera.Constants.FlashMode.off) {
      tstate = RNCamera.Constants.FlashMode.torch;
    } else {
      tstate = RNCamera.Constants.FlashMode.off;
    }
    this.setState({torchon: tstate});
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.viewStep} >
          <WingBlank size="lg">
            <Steps size="small" current={0} direction="vertical">
              <Step
                key={0}
                title="Chọn ảnh"
                status="progress"
                size="small"
              />
              <Step
                key={1}
                title="Phân tích"
                status="wait"
                size="small"
              />

              <Step
                key={2}
                title="Hoàn thành"
                status="wait"
                size="small"
              />
              <Step
                key={3}
                title="Đăng"
                status="wait"
                size="small"
              />
            </Steps>
          </WingBlank>
        </View> */}
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={this.state.torchon}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={styles.viewBtn}>
          <TouchableOpacity
            style={styles.btnGallery}
            onPress={this.toggleTorch.bind(this)}>
            {this.state.torchon == RNCamera.Constants.FlashMode.off ? (
              <Icon
                name="flash-off"
                type="material"
                color="#59c393"
                size={30}
              />
            ) : (
              <Icon
                name="flash-on"
                type="material"
                color="#59c393"
                size={30}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.btnCapture}>
            <Icon
              raised
              name="camera"
              type="font-awesome"
              color="#59c393"
              size={35}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnGallery}
            onPress={this.onSelectImage.bind(this)}>
            <Icon
              name="image"
              type="font-awesome"
              color="#59c393"
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default ImagePickerScreen;
