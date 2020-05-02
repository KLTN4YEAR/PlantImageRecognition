import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import ImagePickerScreen from '../components/ImagePicker';
export default function CameraScreen({navigation}) {
  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ImagePickerScreen />
    </View>
  );
}
