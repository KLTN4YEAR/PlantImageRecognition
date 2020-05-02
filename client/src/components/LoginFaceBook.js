import React from 'react';
import { TouchableOpacity, AsyncStorage } from 'react-native';
import { styles } from '../public/styleSheets/styleLoginScreen';
import { SocialIcon } from 'react-native-elements';
import { OauthKey } from '../ultils/facebookSignInID';
import { connect } from 'react-redux';
import * as Facebook from 'expo-facebook';
import { loginWithFacebook } from '../action/authAction';
import PropTypes from 'prop-types';

class LoginFacebook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
        };
    }; 
    //định nghĩa các prop
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };
    checkLogin= async()=>{
        if (this.props.isAuthenticated) {
            console.log("Đã login!");
            await this.props.navigation.navigate('Tab');
        }
    }
    facebookLogIn = async () => {
        await Facebook.initializeAsync(OauthKey,'plant');
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
                const response = await fetch(
                    `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`
                );
                const responseJSON = JSON.stringify(await response.json());
                await console.log(responseJSON);
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

export default connect(mapStateToProps,{loginWithFacebook })(LoginFacebook);