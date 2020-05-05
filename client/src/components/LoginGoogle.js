import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from '../public/styleSheets/styleLoginScreen';
import { SocialIcon } from 'react-native-elements';
import * as Google from 'expo-google-app-auth';
import { OauthKey } from '../ultils/googleSignInID';
import { connect } from 'react-redux';
import { loginWithGoogle } from '../action/authAction';
import PropTypes from 'prop-types';

class LoginGoogle extends React.Component {
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
    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                // webClientId:OauthKey,
                clientId: OauthKey,
                // iosClientId: YOUR_CLIENT_ID_HERE,
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                this.loginGG(result);
            } else {
                // return { cancelled: true };
                console.log("cancel")
            }
        } catch (e) {
            //   return { error: true };
            console.log(e)
        }
    }

    loginGG = async (result) => {
        const profile = this.state.profile;
        profile["fullName"] = result.user.name;
        profile["facebookId"] = result.user.id;
        profile["email"] = result.user.email;
        profile["avatar"] = result.user.photoUrl;
        this.props.loginWithGoogle(profile);
        this.props.navigation.navigate('Tab');
    };


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

export default connect(mapStateToProps, { loginWithGoogle })(LoginGoogle);