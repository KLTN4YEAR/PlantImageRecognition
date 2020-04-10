import * as React from 'react';
import {createContext, Component} from 'react';
import {Text, View, Image, Button, Picker} from 'react-native';
import {styles} from '../../public/styleSheets/styleListSort';
import CardItem from './cardItemListSort';
export default class ListSort extends React.Component {
  state = {user: ''};
  updateUser = user => {
    this.setState({user: user});
  };
  render() {
    return (
      <View style={styles.container}>
        <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
          <Picker.Item label="Tất cả" value="all" />
          <Picker.Item label="Hoa" value="flower" />
          <Picker.Item label="Cây" value="tree" />
        </Picker>
        <Text style={styles.text}>{this.state.user}</Text>
        <View style={styles.tblItem}>
          <CardItem />
        </View>
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
