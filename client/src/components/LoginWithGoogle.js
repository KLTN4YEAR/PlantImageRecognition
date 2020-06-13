import React from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import {styles} from '../public/styleSheets/styleLoginScreen';
import {SocialIcon} from 'react-native-elements';
import {OauthKey} from '../ultils/googleSignInID';
import {connect} from 'react-redux';
import {loginWithGoogle} from '../action/authAction';
import PropTypes from 'prop-types';

import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';

class LoginGoogle extends React.Component {
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

  async componentDidMount() {
    this._configureGoogleSignIn();
  }

  _configureGoogleSignIn() {
    GoogleSignin.configure({
      androidClientId: OauthKey,
      offlineAccess: false,
    });
  }

  signInWithGoogleAsync = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      //this.setState({userInfo, error: null});
      await this.loginGG(userInfo);
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          // sign in was cancelled
          Alert.alert('cancelled');
          break;
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          Alert.alert('in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // android only
          Alert.alert('play services not available or outdated');
          break;
        default:
          Alert.alert('Something went wrong', error.toString());
          this.setState({
            error,
          });
      }
    }
  };

  loginGG = async result => {
    const profile = this.state.profile;
    profile['fullName'] = result.user.name;
    profile['googleId'] = result.user.id;
    profile['email'] = result.user.email;
    profile['avatar'] = result.user.photo;
    this.props.loginWithGoogle(profile);
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.iconSocial}
        onPress={this.signInWithGoogleAsync}>
        <SocialIcon title="Sign In With Google" button type="google" />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(
  mapStateToProps,
  {loginWithGoogle},
)(LoginGoogle);
