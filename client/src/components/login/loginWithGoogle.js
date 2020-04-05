import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,

} from 'react-native';
import {loginSocial} from  '../../actions/authAction';
class LoginWithGoogle extends Component {
    state = {
        userDetails: '',
        GoogleLogin: false,
    }
    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId: '185189707578-c9cj84i6p7cjnhgpglik4nda5f6r45eh.apps.googleusercontent.com',
                // iosClientId: YOUR_CLIENT_ID_HERE,
                scopes: ['profile', 'email'],
            });
            console.log(result)

            if (result.type === 'success') {
                await this.props.loginSocial(result.accessToken);
                //this.props.loginUserWithGG(result.user.id, result.accessToken, this.navigateToMainScreen)
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
            await AsyncStorage.setItem('userID', JSON.stringify(data.userID));
            await AsyncStorage.setItem('authToken', JSON.stringify(data.token));
            await this.props.navigation.navigate('tabNavigation');
        } catch (error) {
            console.log("Something went wrong", error);
        }
    }
    onFailure = (error) => {
        console.log(error);
    };
    googleResponse = (response) => {
        const accessToken=response.accessToken;
        this.props.loginSocial(accessToken);
    };

    render() {
        return (
            <TouchableOpacity style={styles.submitButton1} onPress={this.signInWithGoogleAsync} >
                    {/* <SocialIcon
                                    type='google'
                                /> */}
                <Text style={styles.submitButtonText1}> Google </Text>
                </TouchableOpacity>
                
        );
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

  
export default connect(mapStateToProps,{loginSocial })(LoginWithGoogle);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },


    headerContainer: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        backgroundColor: '#FF5722',
    },


    headerTxt: {
        fontSize: 13,
        color: 'white',
        alignSelf: 'center'
    },


    signinContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


    userDetailContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },


    userImage: {
        width: 100,
        height: 100,
    },


    txtEmail: {
        color: 'black',
        marginTop: 10,
        fontSize: 13,
    },


    txtName: {
        color: 'black',
        margin: 10,
        fontSize: 13,
    },
    submitButton1: {
        backgroundColor: '#36485f',
        padding: 10,
        height: 40,
        width: 150,
        marginLeft: 130,
        marginTop: 25,
    },
    submitButtonText1: {
        textAlign: 'center',
        color: '#fff',
    },


})