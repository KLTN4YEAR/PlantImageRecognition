import React, { Fragment, Component } from 'react';
// import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
import {styles} from '../public/styleSheets/styleImagePicker';
import { Icon } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filepath: {
        data: '',
        uri: ''
      },
      fileData: '',
      fileUri: ''
    }
  }

  chooseImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));s
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });
  }

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });

  }

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });

  }

  renderFileData() {
    if (this.state.fileData) {
      return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
        style={styles.images}
      />
    } else {
      return <Image source={require('../public/images/vu.jpg')}
        style={styles.images}
      />
    }
  }

  renderFileUri() {
    if (this.state.fileUri) {
      return <Image
        source={{ uri: this.state.fileUri }}
        style={styles.images}
      />
    } else {
      return <Image
        source={require('../public/images/vu.jpg')}
        style={styles.images}
      />
    }
  }
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <ScrollView style={styles.scrollView}>
          <View style={styles.body}>
              <Grid style={styles.ImageSections}>
                <Row style={styles.rowImage}>
                  <Col size={1} style={styles.colImage}>
                    {this.renderFileData()}
                    <Text style={{ textAlign: 'center' }}>Base 64 String</Text>
                  </Col>
                  <Col size={1} style={styles.colImage}>
                    {this.renderFileUri()}
                    <Text style={{ textAlign: 'center' }}>File Uri</Text>
                  </Col>
                </Row>

                {/* Kết quả */}
              <Row style={styles.rowImage}>
                <TouchableOpacity onPress={() =>
                  this.props.navigation.navigate('ResultCamera')} style={styles.btnSection}>
                 <Text>Result</Text>
               </TouchableOpacity>
              </Row>
                
                <Row style={styles.btnParentSection}>
                  {/* <Row size={1} style={styles.rowSection}>
                    <TouchableOpacity onPress={this.chooseImage} style={styles.btnSection}  >
                      <Text style={styles.btnText}>Choose File</Text>
                    </TouchableOpacity>
                  </Row> */}
                  {/* <Row size={1}  style={styles.rowSection}> */}
                    <Col size={1} style={styles.colSection}>
                      <TouchableOpacity onPress={this.launchCamera} style={styles.btnSectionCamera}  >
                        <Icon
                          type='font-awesome'
                          name='camera-retro'
                          style={styles.labelIcon}
                          color='tomato' />
                        <Text style={styles.btnText}>Camera</Text>
                      </TouchableOpacity>
                    </Col>
                    <Col size={1} style={styles.colSection}>
                      <TouchableOpacity onPress={this.launchImageLibrary} style={styles.btnSectionGallery}  >
                        <Icon
                          type='font-awesome'
                          name='image'
                          style={styles.labelIcon}
                          color='tomato' />
                        <Text style={styles.btnText}>Gallery</Text>
                      </TouchableOpacity>
                    </Col>
                  {/* </Row>  */}
                </Row>
              </Grid>           
          </View>
        </ScrollView>
      </Fragment>
    );
  }
};

