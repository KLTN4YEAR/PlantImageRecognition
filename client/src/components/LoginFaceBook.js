import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from '../public/styleSheets/styleLoginScreen';
import { SocialIcon } from 'react-native-elements';
import { OauthKey } from '../ultils/facebookSignInID';
import { connect } from 'react-redux';
import * as Facebook from 'expo-facebook';
import { loginWithFacebook } from '../action/authAction';

class LoginFacebook extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: null,
        };
    };

    facebookLogIn = async () => {
        await Facebook.initializeAsync(OauthKey, 'plant');
        try {
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync(OauthKey, {
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                await this.props.loginWithFacebook(token);
                await this.props.navigation.navigate('Tab');

            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}!`);
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.iconSocial} onPress={this.facebookLogIn}>
                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                />
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { loginWithFacebook })(LoginFacebook);