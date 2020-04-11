import React from 'react';
import { Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../public/styleSheets/styleLoginScreen';
import { SocialIcon } from 'react-native-elements';


class LoginScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../public/images/logo8.jpg')}
                    style={styles.imgLogo}
                />
                <TouchableOpacity style={styles.iconSocial} onPress={() =>
                    this.props.navigation.navigate('Tab')}>
                    <SocialIcon
                        title='Sign In With Facebook'
                        button
                        type='facebook'
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconSocial} onPress={() =>
                    this.props.navigation.navigate('Tab')}>
                    <SocialIcon
                        title='Sign In With Google'
                        button
                        type='google'
                        onPress={() =>
                            this.props.navigation.navigate('Tab')}
                    />
                </TouchableOpacity>
                
                
                {/* <View style={styles.inputView} >
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
                </TouchableOpacity> */}
                {/* <TouchableOpacity onPress={() =>
                    this.props.navigation.navigate('Register')}>
                    <Text style={styles.loginText}>Signup</Text>
                </TouchableOpacity> */}
                <Text style={styles.txtTemp}>By using our Services, you are agreeing to these terms</Text>
            </View>
        );
    }
}


export default (LoginScreen);