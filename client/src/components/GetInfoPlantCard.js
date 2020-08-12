'use strict';
import React, {Component} from 'react';
import {
  Icon,
  Text,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
} from 'react-native';
import {styles} from '../public/styleSheets/styleTfliteView';
import ProgressCircle from 'react-native-progress-circle';
import {viewInfoByEngName} from '../sqlite/dbFlowerOffline';
import * as Animatable from 'react-native-animatable';

import ImageResizer from 'react-native-image-resizer';
class GetInfoPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: null,
      avatarPlant: null,
      fId: null,
      resizedImageUri: null,
    };
  }
  async componentDidMount() {
    await this.getInfoByName();
  }

  async componentDidUpdate(prevProps) {
    const {route} = this.props;
    if (route !== prevProps.route) {
      await this.getInfoByName();
    }
  }

  async getInfoByName() {
    const {fName, route} = this.props;
    // Xư lý bất đồng bộ sqlite
    await viewInfoByEngName(fName, this.getResultInfo);
  }

  getResultInfo = result => {
    if (result) {
      this.setState({
        fName: result[0].nameVN,
        avatarPlant: result[0].img1,
        fId: result[0]._id,
      });
      this.resize(this.state.avatarPlant);
    }
  };

  resize = imgUri => {
    ImageResizer.createResizedImage(imgUri, 120, 120, 'JPEG', 80)
      .then(({uri}) => {
        this.setState({
          resizedImageUri: uri,
        });
  
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const {avatarPlant, fName, fId, resizedImageUri} = this.state;
    const {percent, navigation} = this.props;
    return (
      <TouchableOpacity
        style={styles.viewResult}
        onPress={() =>
          navigation.navigate('PlantInfo', {
            fId: fId,
            backScreen: 'ImagePicker',
          })
        }>
        {resizedImageUri ? (
          <Image
            source={{
              uri: resizedImageUri,
            }}
            style={styles.imgFlow}
          />
        ) : avatarPlant ? (
          <Image
            source={{
              uri: avatarPlant,
            }}
            style={styles.imgFlow}
          />
        ) : (
          <Image
            source={require('../public/images/unknown.png')}
            style={styles.imgFlow}
          />
        )}

        <Animatable.View animation="fadeIn" style={styles.viewTrend}>
          {fName ? (
            <Text style={styles.lblNameFlow}>{fName}</Text>
          ) : (
            <Text style={styles.lblNameFlow}>Unknown</Text>
          )}
        </Animatable.View>
        <Animatable.View animation="fadeInRight" style={styles.viewSimilar}>
          <ProgressCircle
            percent={percent}
            radius={30}
            borderWidth={5}
            color="#3399FF"
            bgColor="rgba(3,12,38,0.4)">
            <Text style={{fontSize: 15, color: '#fff'}}>
              {percent.toFixed(0) + '%'}
            </Text>
          </ProgressCircle>
        </Animatable.View>
      </TouchableOpacity>
    );
  }
}
export default GetInfoPlant;
