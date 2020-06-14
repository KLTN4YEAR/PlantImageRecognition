import React from 'react';
import {Image, View, Text, Animated} from 'react-native';
import {styles} from '../public/styleSheets/styleLoginScreen';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Facebook from '../components/LoginWithFacebook';
import Google from '../components/LoginWithGoogle';
import * as Animatable from 'react-native-animatable';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    // init animated with value = 0
    this.animated = new Animated.Value(0);
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  render() {
    return (
      <View style={styles.container}>
        <Animatable.Image
          animation="zoomIn"
          source={require('../public/images/logo_transparent.png')}
          style={styles.imgLogo}
        />
        <Facebook navigation={this.props.navigation} />
        <Google navigation={this.props.navigation} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(LoginScreen);
