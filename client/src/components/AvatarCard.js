import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from '../public/styleSheets/styleAvatarCard';
import {connect} from 'react-redux';
import {auth} from '../config/helper';
import {getInfo} from '../action/userAction';
import * as Animatable from 'react-native-animatable';

class AvatarCard extends Component {
  render() {
    const {profile} = this.props;
    return (
      <Animatable.View animation="flipInX" style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={{
            uri: profile.avatar,
          }}>
          <View style={styles.headerColumn}>
            {profile.avatar ? (
              <Image
                style={styles.userImage}
                source={{
                  uri: profile.avatar,
                }}
              />
            ) : (
              <Image
                style={styles.userImage}
                source={require('../public/images/man.png')}
              />
            )}

            {profile.fullName ? (
              <Text style={styles.userNameText}>{profile.fullName}</Text>
            ) : (
              <Text style={styles.userNameText}>Chưa cập nhật!</Text>
            )}

            <View style={styles.userAddressRow}>
              <View>
                <Icon
                  name="place"
                  underlayColor="transparent"
                  iconStyle={styles.placeIcon}
                  // onPress={this.onPressPlace}
                />
              </View>
              <View style={styles.userCityRow}>
                {profile.address ? (
                  <Text style={styles.userCityText}>{profile.address}</Text>
                ) : (
                  <Text style={styles.userCityText}>Chưa cập nhật</Text>
                )}
              </View>
            </View>
          </View>
        </ImageBackground>
      </Animatable.View>
    );
  }
}

function mapStateToProp(state) {
  return {
    authenticate: state.auth.isAuthenticated,
    profile: state.user.profile,
    avatar: state.user.profile.avatar,
  };
}

export default connect(
  mapStateToProp,
  {getInfo},
)(AvatarCard);
