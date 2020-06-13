import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera-tflite';
import outputs from '../output/output-flower.json';
import _ from 'lodash';

let _currentInstant = 0;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      output: '',
    };
  }

  processOutput({data}) {
    console.log("dt",data)
    const probs = _.map(data, item => _.round(item / 255.0, 0.02));
    console.log('probs', data);
    const orderedData = _.chain(data)
      .zip(outputs)
      .orderBy(0, 'desc')
      .map(item => [_.round(item[0] / 255.0, 2), item[1]])
      .value();
    const outputData = _.chain(orderedData)
      .take(3)
      .map(item => `${item[1]}: ${item[0]}`)
      .join('\n')
      .value();
    console.log('out',outputData)
    const time = Date.now() - (_currentInstant || Date.now());
    const output = `Guesses:\n${outputData}\nTime:${time} ms`;
    this.setState(state => ({
      output,
    }));
    _currentInstant = Date.now();
  }

  render() {
    const modelParams = {
      file: 'models/lite_flowers_model_v7.tflite',
      inputDimX: 224,
      inputDimY: 224,
      outputDim: 50,
      isQuantized: true,
      freqms: 0,
    };
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={
            'We need your permission to use your camera phone'
          }
          // androidCameraPermissionOptions={{
          //   title: 'Permission to use camera',
          //   message: 'We need your permission to use your camera',
          //   buttonPositive: 'Ok',
          //   buttonNegative: 'Cancel',
          // }}
          // androidRecordAudioPermissionOptions={{
          //   title: 'Permission to use audio recording',
          //   message: 'We need your permission to use your audio',
          //   buttonPositive: 'Ok',
          //   buttonNegative: 'Cancel',
          // }}
          // onGoogleVisionBarcodesDetected={({barcodes}) => {
          //   console.log(barcodes);
          // }}
          
          onModelProcessed={data => this.processOutput(data)}
          modelParams={modelParams}
          >
          <Text style={styles.cameraText}>{this.state.output}</Text>
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
