import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from '../public/styleSheets/styleLoginScreen';
import { SocialIcon } from 'react-native-elements';
import { OauthKey } from '../ultils/facebookSignInID';
import { connect } from 'react-redux';
import * as Facebook from 'expo-facebook';
import { loginWithFacebook } from '../action/authAction';
import PropTypes from 'prop-types';

class LoginFacebook extends React.Component {
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
    componentDidMount() {
        this.checkLogin();
    }
    checkLogin= async()=>{
        const data = await this.props.isAuthenticated
        if (data) {
            console.log("Đã login!");
            await this.props.navigation.navigate('Tab');
        }
    }
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
                await this.getInfo(token);  
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}!`);
        }
    }
    getInfo= async(token)=>{
        const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`
        );
        
        const JsonReturn=JSON.stringify(await response.json());
        var obj = JSON.parse(JsonReturn);

        console.log(obj.picture.data.url);
        
        const profile = this.state.profile;
        profile["fullName"] = obj.name;
        profile["facebookId"] = obj.id;
        profile["email"] = obj.email;
        profile["avatar"] = obj.picture.data.url;
        await this.props.loginWithFacebook(profile);
        await this.props.navigation.navigate('Tab');
    };
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
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loginWithFacebook })(LoginFacebook);