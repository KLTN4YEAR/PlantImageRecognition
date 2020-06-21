import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk';

import {styles} from '../public/styleSheets/styleLoginScreen';
import {SocialIcon} from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import {connect} from 'react-redux';
import {loginWithFacebook} from '../action/authAction';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
class LoginFacebook extends Component {
  state = {
    profile: {
      fullName: '',
      facebookId: '',
      email: '',
      avatar: '',
    },
  };
  //định nghĩa các prop
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  async componentDidUpdate(prevProps) {
    const {isAuthenticated, navigation} = this.props;
    if (isAuthenticated !== prevProps.isAuthenticated) {
      if (isAuthenticated) {
        navigation.navigate('Tab');
      }
    }
  }

  loginFB = async token => {
    const {loginWithFacebook, navigation} = this.props;
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture.type(large)`,
    );

    const JsonReturn = JSON.stringify(await response.json());
    var obj = JSON.parse(JsonReturn);
    const profile = this.state.profile;
    profile['fullName'] = obj.name;
    profile['facebookId'] = obj.id;
    profile['email'] = obj.email;
    profile['avatar'] = obj.picture.data.url;
    await loginWithFacebook(profile);
  };

  loginWithFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      login => {
        if (login.isCancelled) {
          Toast.show('Tác vụ đã hủy');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data.accessToken.toString();
            this.loginFB(accessToken);
          });
        }
      },
      error => {
        Toast.show('Có lỗi xảy ra: ' + error);
      },
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.iconSocial}
        onPress={this.loginWithFacebook}>
        <Animatable.View animation="slideInDown">
          <SocialIcon title="Sign In With Facebook" button type="facebook" />
        </Animatable.View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  {loginWithFacebook},
)(LoginFacebook);
