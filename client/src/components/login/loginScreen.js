import React from 'react';
import { Image, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../../public/styleSheets/styleLoginScreen';
import {SocialIcon} from 'react-native-elements';
import {Col, Row, Grid} from 'react-native-easy-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authAction';
import { clearErrors } from '../../actions/errorActions';
class LoginScreen extends React.Component {
   state = {
    modal: false,
    email: '',
    password: '',
    msg: null
  };
  //định nghĩa các prop
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();//chấp nó bấm submit liên tục nè
    const { email, password } = this.state;
    const user = {
      email,
      password
    };
    // Attempt to login
    this.props.login(user);
    this.props.navigation.navigate('Tab')

  };
  //lưu những thay đổi nơi input vào state
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  renderAlert() {
    if (this.props.error.msg.error)
      return (
        <Text>
          {this.props.error.msg.error}
        </Text>);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./../../public/images/logo.png')}
          style={styles.imgLogo}
        />
        {this.renderAlert()}
        <Text style={styles.logo}>PLANT ID</Text>
        <View style={styles.inputView} >
          <TextInput
            id="login"
            name="email"
            style={styles.inputText}
            value={this.state.email}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView} >
          <TextInput
            id="password"
            name="password"
            value={this.state.password}
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={this.onSubmit}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
          this.props.navigation.navigate('Register')}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
        <Grid style={styles.iconLogin}>
          <Row>
            <SocialIcon
              type="google"
              onPress={() =>
                this.props.navigation.navigate('Tab', {
                  screen: 'Home',
                })
              }
            />
            <Text style={styles.txtOr}>or</Text>
            <SocialIcon
              raised={false}
              type="facebook"
              onPress={() =>
                this.props.navigation.navigate('Tab', {
                  screen: 'Home',
                })
              }
            />
          </Row>
        </Grid>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(LoginScreen);