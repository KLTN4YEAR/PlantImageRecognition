import React from 'react';
import { Image, View, Text} from 'react-native';
import { styles } from '../public/styleSheets/styleLoginScreen';
import { connect } from 'react-redux';
import FB from '../components/LoginFaceBook';
import GG from '../components/LoginGoogle';


class LoginScreen extends React.Component {
 
    
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../public/images/logo8.jpg')}
                    style={styles.imgLogo}
                />
                <FB navigation={this.props.navigation}/>
                <GG navigation={this.props.navigation} />
                <Text style={styles.txtTemp}>By using our Services, you are agreeing to these terms</Text>
            </View>
        );
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps)(LoginScreen);