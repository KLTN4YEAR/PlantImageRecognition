import React from 'react';
import {
  View,
  StatusBar,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrap();
  }

  _bootstrap = async () => {
    //const {navigation} = this.props;
    const userToken = await AsyncStorage.getItem('jwt');
    this.props.navigation.navigate(userToken ? 'Tab' : 'Login');
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#33CC08" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
