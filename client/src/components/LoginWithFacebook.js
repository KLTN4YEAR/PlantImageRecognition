import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk';

import {styles} from '../public/styleSheets/styleLoginScreen';
import {SocialIcon} from 'react-native-elements';

import {connect} from 'react-redux';
import {loginWithFacebook} from '../action/authAction';
import PropTypes from 'prop-types';

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

  loginFB = async token => {
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
    this.props.loginWithFacebook(profile);
    this.props.navigation.navigate('Tab');
  };

  loginWithFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      login => {
        if (login.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data.accessToken.toString();
            this.loginFB(accessToken);
          });
        }
      },
      error => {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.iconSocial}
        onPress={this.loginWithFacebook}>
        <SocialIcon title="Sign In With Facebook" button type="facebook" />
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
