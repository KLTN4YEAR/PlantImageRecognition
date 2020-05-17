import React from 'react';
import { Image, View, Text,ImageBackground, } from 'react-native';
import { styles } from '../public/styleSheets/styleLoginScreen';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Facebook from '../components/LoginWithFacebook';
import Google from '../components/LoginWithGoogle';

class LoginScreen extends React.Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool,
    };

    componentDidMount() {
        this.checkLogin();
    }

    checkLogin = async () => {
        const data = await this.props.isAuthenticated
        if (data) {
            console.log("Đã login!");
            await this.props.navigation.navigate('Tab');
        }
    }
    
    render() {
        return (
          <View style={styles.container}>
            <ImageBackground
              source={require('../public/images/backgroundlogin.jpg')}
              style={styles.imgBack}
              blurRadius={0.9}>
              <Image
                source={require('../public/images/logo8.jpg')}
                style={styles.imgLogo}
              />
              <Facebook navigation={this.props.navigation} />
              <Google navigation={this.props.navigation} />
              <Text style={styles.txtTemp}>
                By using our Services, you are agreeing to these terms
              </Text>
            </ImageBackground>
          </View>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(LoginScreen);