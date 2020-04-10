import * as React from 'react';
import {Text, View, Image, Button, TouchableOpacity} from 'react-native';
import {styles} from '../public/styleSheets/styleImagePicker';
import ImagePicker from 'react-native-image-picker';
import {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ImagePickerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
    };
  }
  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };
  render() {
    return (
      <View style={styles.viewCard}>
        <Button
          icon={<Icon name="image" size={15} color="white" />}
          title="Choose an image from library or take picture directly!"
          onPress={this.chooseFile.bind(this)}
        />
        <View style={styles.container}>
          <Image
          source={{ uri: this.state.filePath.path}}
          style={{width: 100, height: 100}} />
          <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
            }}
            style={{width: 100, height: 100}}
          />
          <Image
            source={{uri: this.state.filePath.uri}}
            style={{width: 250, height: 250}}
          />
          <Text style={{alignItems: 'center'}}>{this.state.filePath.uri}</Text>
        </View>
        <TouchableOpacity onPress={this.chooseFile.bind(this)}><Text>Press</Text></TouchableOpacity>
      </View>
    );
  }
}
