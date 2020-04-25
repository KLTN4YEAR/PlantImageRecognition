import React from 'react';
import {  TouchableOpacity } from 'react-native';
import { styles } from '../public/styleSheets/styleLoginScreen';
import { SocialIcon } from 'react-native-elements';
import * as Google from 'expo-google-app-auth';
import { OauthKey } from '../ultils/googleSignInID';
import { connect } from 'react-redux';
import { loginSocial } from '../action/authAction';


class LoginGoogle extends React.Component {
    signInWithGoogleAsync = async () => {
        try {

            const result = await Google.logInAsync({
                androidClientId: OauthKey,
                // iosClientId: YOUR_CLIENT_ID_HERE,
                scopes: ['profile', 'email'],
            });
            console.log(result)

            if (result.type === 'success') {
                await this.props.loginSocial(result.accessToken);
                await this.props.navigation.navigate('Tab');
            } else {
                // return { cancelled: true };
                console.log("cancel")
            }
        } catch (e) {
            //   return { error: true };
            console.log(e)
        }
    }
    navigateToMainScreen = async (data) => {
        try {
            await this.props.navigation.navigate('Tab');
        } catch (error) {
            console.log("Something went wrong", error);
        }
    }
   

    render() {
        return (
                <TouchableOpacity style={styles.iconSocial} onPress={this.signInWithGoogleAsync} >
                    <SocialIcon
                        title='Sign In With Google'
                        button
                        type='google'
                    />
                </TouchableOpacity>
                
        );
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { loginSocial })(LoginGoogle);