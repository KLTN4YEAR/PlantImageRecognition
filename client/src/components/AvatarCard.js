import React, { Component } from 'react';
import { Card, Icon } from 'react-native-elements'
import {
    Image,
    ImageBackground,
    Text,
    View,
} from 'react-native';
import {styles} from '../public/styleSheets/styleAvatarCard';
import { connect } from 'react-redux';
import { fetch } from '../action/userAction';
import { auth } from '../config/helper';


class AvatarCard extends Component {
    constructor(props) {
        super(props);
        this.state = { photoURL: ''};
    }
    // componentDidMount = async () => {
    //     const data = await auth.isAuthenticated();
    //     if(data.user._id){
    //         await this.props.fetch(data.user._id);
    //         this.setState({
    //             photoURL: data.user.photoURL
    //         });
    //         console.log(this.state.photoURL);

    //     }
    // }
    render() {

        return (
            <View style={styles.headerContainer}>
                <ImageBackground
                    style={styles.headerBackgroundImage}
                    blurRadius={10}
                    source={{
                        uri: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/p960x960/50688968_787150878305428_8692489284222976000_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=teY0b-GLvoMAX-ICFRK&_nc_ht=scontent.fhan3-1.fna&_nc_tp=6&oh=b9b2f59cc238b18dcd1b6b312f7a9975&oe=5EB28331',
                    }}
                >
                    <View style={styles.headerColumn}>
                        <Image
                            style={styles.userImage}
                            source={{
                                uri: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/p960x960/50688968_787150878305428_8692489284222976000_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=teY0b-GLvoMAX-ICFRK&_nc_ht=scontent.fhan3-1.fna&_nc_tp=6&oh=b9b2f59cc238b18dcd1b6b312f7a9975&oe=5EB28331',
                            }}
                        />
                        <Text style={styles.userNameText}>Nguyen Tuan Vu</Text>
                        <View style={styles.userAddressRow}>
                            <View>
                                <Icon
                                    name="place"
                                    underlayColor="transparent"
                                    iconStyle={styles.placeIcon}
                                    // onPress={this.onPressPlace}
                                />
                            </View>
                            <View style={styles.userCityRow}>
                                <Text style={styles.userCityText}>
                                    HCM City, VietNam
                                </Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
function mapStateToProp(state) {
    return {
        authenticate: state.auth.isAuthenticated,
        profile: state.user.profile,
        avatar: state.user.avatar
    }
}

export default connect(mapStateToProp, { fetch })(AvatarCard);