// SignUp.js
import React from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';
import {styles} from '../../public/styleSheets/styleAddDetail';

export default class AddDetail extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Tên thực vật: "
          autoCapitalize="none"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Nơi phân bố: "
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Chủng loại: "
          autoCapitalize="none"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Thông tin thêm: "
          autoCapitalize="none"
          placeholderTextColor="white"
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
