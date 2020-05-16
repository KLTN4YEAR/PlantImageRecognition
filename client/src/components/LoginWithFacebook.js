
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';

import { styles } from '../public/styleSheets/styleLoginScreen';
import { SocialIcon } from 'react-native-elements';

import { OauthKey } from '../ultils/facebookSignInID';
import { connect } from 'react-redux';
import { loginWithFacebook } from '../action/authAction';
import PropTypes from 'prop-types';

class LoginFacebook extends Component {
  state = {
    profile: {
      fullName: '',
      facebookId: '',
      email: '',
      avatar: '',
    },
  }
  //định nghĩa các prop
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };
  // logoutWithFacebook = () => {
  //   LoginManager.logOut();
  //   this.setState({userInfo: {}});
  // };

  // getInfoFromToken = token => {
  //   const PROFILE_REQUEST_PARAMS = {
  //     fields: {
  //       string: 'id,name,first_name,last_name,email,picture.type(large)',
  //     },
  //   };
  //   const profileRequest = new GraphRequest(
  //     '/me',
  //     {token, parameters: PROFILE_REQUEST_PARAMS},
  //     (error, user) => {
  //       if (error) {
  //         console.log('login info has error: ' + error);
  //       } else {
  //         this.setState({userInfo: user});
  //         console.log('result:', user);
  //       }
  //     },
  //   );
  //   new GraphRequestManager().addRequest(profileRequest).start();
  // };
  loginFB = async (token) => {
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture.type(large)`
    );

    const JsonReturn = JSON.stringify(await response.json());
    var obj = JSON.parse(JsonReturn);
    const profile = this.state.profile;
    profile["fullName"] = obj.name;
    profile["facebookId"] = obj.id;
    profile["email"] = obj.email;
    profile["avatar"] = obj.picture.data.url;
    this.props.loginWithFacebook(profile);
    this.props.navigation.navigate('Tab');
  };
  loginWithFacebook = () => {
    // Attempt a login using the Facebook login dialog asking for default permissions.
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
      <TouchableOpacity style={styles.iconSocial} onPress={this.loginWithFacebook} >
        <SocialIcon title='Sign In With Facebook' button type='facebook' />
      </TouchableOpacity>
      
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loginWithFacebook })(LoginFacebook);