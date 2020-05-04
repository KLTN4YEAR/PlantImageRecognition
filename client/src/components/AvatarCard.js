import React, { Component } from 'react';
import { Icon } from 'react-native-elements'
import {
    Image,
    ImageBackground,
    Text,
    View,
} from 'react-native';
import { styles } from '../public/styleSheets/styleAvatarCard';
import { connect } from 'react-redux';

class AvatarCard extends Component {
    constructor(props) {
        super(props);
        this.state = { photoURL: '' };
    }

    render() {
        const date=this.props.profile.created;
        var d = new Date(date);
        //format ngày tham gia
        var dateFormat = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + " " ; 
        return (
            <View style={styles.headerContainer}>
                <ImageBackground
                    style={styles.headerBackgroundImage}
                    blurRadius={10}
                    source={{
                        uri: this.props.avatar,
                    }}
                >
                    <View style={styles.headerColumn}>
                        <Image
                            style={styles.userImage}
                            source={{
                                uri: this.props.profile.avatar,
                            }}
                        />
                        <Text style={styles.userNameText}>{this.props.profile.fullName}</Text>
                        <View style={styles.userAddressRow}>
                            <View>
                                <Icon
                                    name="check"
                                    underlayColor="transparent"
                                    iconStyle={styles.placeIcon}
                                // onPress={this.onPressPlace}
                                />
                            </View>
                            <View style={styles.userCityRow}>
                                <Text style={styles.userCityText}>
                                   {dateFormat}
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
        avatar: state.user.profile.avatar
    }
}

export default connect(mapStateToProp)(AvatarCard);