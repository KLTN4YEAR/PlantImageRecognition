import React, { Component } from 'react';
import { Card, Icon } from 'react-native-elements'
import {
    Image,
    ImageBackground,
    Linking,
    ListView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {styles} from '../public/styleSheets/styleAvatarCard';


export default class AvatarCard extends Component {

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