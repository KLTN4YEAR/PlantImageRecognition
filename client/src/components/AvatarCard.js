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
import { auth } from '../config/helper';
import { getInfo } from '../action/userAction';

class AvatarCard extends Component {
    state = {
        fullName: '',
        address: '',
        avatar: '',
    
    };

    componentDidMount = async () => {
        await this.loadData();
    };
    UNSAFE_componentWillReceiveProps(nextProps) {
        //console.log(nextProps);
        if(nextProps.profile!=this.props.profile)
        {   
            this.setState({ fullName: nextProps.profile.fullName });
            this.setState({ address: nextProps.profile.address });
        }
    };
    loadData = async () => {
        const data = await auth.isAuthenticated();
        if (data) {
            await this.props.getInfo(data, data.user._id);
            await this.initValueForUser();
        }
    };
    initValueForUser = async () => {
        if (this.props.profile.fullName == undefined || this.props.profile.fullName == null) {
            this.setState({ fullName: 'Đang cập nhật!' })
        }
        else {
            this.setState({ fullName: this.props.profile.fullName })
        }
        if (this.props.profile.address == undefined || this.props.profile.address == null) {
            this.setState({ address: 'Đang cập nhật!' })
        }
        else {
            this.setState({ address: this.props.profile.address })
        }
    };
    render() {
       
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
                                uri: this.props.avatar,
                            }}
                        />
                        <Text style={styles.userNameText}>{this.state.fullName}</Text>
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
                                   {this.state.address}
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

export default connect(mapStateToProp,{getInfo})(AvatarCard);