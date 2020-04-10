import React from 'react';
import { Image, View, Text } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';
import { styles } from './../../public/StyleSheets/styleLoginScreen';
import { IconButton, Colors } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class LoginGGScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('./../../public/images/logo.png')}
                    style={styles.imgLogo}
                />
                {/* <GoogleSigninButton
          style={styles.btnGoogle}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() =>
            this.props.navigation.navigate('Tab', {
              screen: 'Home',
            })
          }
        />*/}
                <View style={styles.viewBtn}>
                    <Text style={styles.txtLogin}>LOGIN</Text>
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
                <View style={styles.viewBottom}>
                    <Text style={styles.txtBottom}>Tìm hiểu thêm về chính sách phát triển</Text>
                </View>
            </View>
        );
    }
}
