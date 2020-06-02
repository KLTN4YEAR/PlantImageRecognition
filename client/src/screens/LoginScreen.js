import React from 'react';
import {Image, View, Text, ImageBackground, ToastAndroid} from 'react-native';
import {styles} from '../public/styleSheets/styleLoginScreen';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Facebook from '../components/LoginWithFacebook';
import Google from '../components/LoginWithGoogle';
import Toast from 'react-native-simple-toast';

class LoginScreen extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  componentDidMount() {
    this.checkLogin();
  }

  checkLogin = async () => {
    const data = await this.props.isAuthenticated;
    if (data) {
      Toast.show('Đã login!');
      await this.props.navigation.navigate('Tab');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../public/images/logo_transparent.png')}
          style={styles.imgLogo}
        />
        <Facebook navigation={this.props.navigation} />
        <Google navigation={this.props.navigation} />
        <Text style={styles.txtTemp}>
          By using our Services, you are agreeing to these terms
        </Text>
        {/* <ImageBackground
              source={require('../public/images/backgroundlogin.jpg')}
              style={styles.imgBack}
              blurRadius={0.9}
            /> */}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(LoginScreen);
