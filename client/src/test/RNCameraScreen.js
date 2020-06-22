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

class ImagePickerScreen extends Component {
  state = {torchon: RNCamera.Constants.FlashMode.off};
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
          this.props.navigation.navigate('ResultRNCamera', {
            image: image,
          });
        })
        .catch(err => {
          console.log('Error: ', err);
          Toast.show('Có lỗi xảy ra!');
        });
    }
  };

  //Mode of select Image with Gallery
  onSelectImage() {
    const {navigation} = this.props;
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
        navigation.navigate('ResultRNCamera', {
          image: image,
        });
      })
      .catch(err => {
        console.log('Error: ', err);
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
    const {isFocused} = this.props;
    return (
      <View style={styles.container}>
        {isFocused && (
          <>
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
          </>
        )}
      </View>
    );
  }
}
export default ImagePickerScreen;
