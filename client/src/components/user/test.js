import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth, API_URL } from '../../config/helper';
import {Text} from 'react-native';

class ViewProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            userID: null,
            fullname: null,
            timTroStatus: false
        };
    }
    componentDidMount = async () => {
        // get userID and authToken from asyncStorege
        let dataUserID = await AsyncStorage.getItem("name");
        this.setState({fullname:dataUserID})

    }

    render() {
        return (<Text>
            {this.state.fullname}
        </Text>
                                  
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

export default connect(mapStateToProp)(ViewProfile);