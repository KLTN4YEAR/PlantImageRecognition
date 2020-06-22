import React from 'react';
import {View, StatusBar, ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {checkAuthenticated} from '../action/authAction';
import {connect} from 'react-redux';
class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrap();
  }

  _bootstrap = async () => {
    const userToken = await AsyncStorage.getItem('jwt');
    this.props.navigation.navigate(userToken ? 'Tab' : 'Login');
  }

  async componentDidMount(){
    const {checkAuthenticated} = this.props;
    const userToken = await AsyncStorage.getItem('jwt');
    if(userToken){
      checkAuthenticated();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#33CC08" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
function mapStateToProp(state) {
  return {
    isAuthenticate: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToProp,{checkAuthenticated,})(AuthLoadingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
