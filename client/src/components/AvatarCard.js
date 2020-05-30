import React, { Component } from 'react';
import { Icon } from 'react-native-elements'
import {
    Image,
    ImageBackground,
    Text,
    View,
} from 'react-native';
import { styles } from '../public/styleSheets/styleAvatarCard';
import { connect } from 'react-redux';
import { auth } from '../config/helper';
import { getInfo } from '../action/userAction';

class AvatarCard extends Component {
    // state = {
    //     fullName: '',
    //     address: '',
    //     avatar: '',
    
    // };

    // componentDidMount = async () => {
    //     await this.loadData();
    // };

    // componentDidUpdate()

    // loadData = async () => {
    //     const data = await auth.isAuthenticated();
    //     if (data) {
    //         await this.props.getInfo(data, data.user._id);
    //         await this.initValueForUser();
    //     }
    // };

    

    render() {
        const {profile}=this.props
        return (
          <View style={styles.headerContainer}>
              
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
                  <Text style={styles.userNameText}>
                    {profile.fullName}
                  </Text>
                ) : (
                  <Text style={styles.userNameText}>
                    Chưa cập nhật!
                  </Text>
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
                      <Text style={styles.userCityText}>
                        {profile.address}
                      </Text>
                    ) : (
                      <Text style={styles.userCityText}>
                        Chưa cập nhật
                      </Text>
                    )}
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        );
    }
}

function mapStateToProp(state) {
    return {
        authenticate: state.auth.isAuthenticated,
        profile: state.user.profile,
        avatar: state.user.profile.avatar
    }
}

export default connect(mapStateToProp,{getInfo})(AvatarCard);