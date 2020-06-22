import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {styles} from '../public/styleSheets/styleSearchView';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Icon} from 'react-native-elements';

class SearchResultList extends Component {
  render() {
    const {plant} = this.props;
    return (
      <ScrollView style={styles.viewScroll}>
        <View style={styles.viewImg}>
          {plant.images[0] ? (
            <Image
              source={{
                uri: plant.images[0],
              }}
              style={styles.imgCard}
            />
          ) : (
            <Image
              source={{
                uri:
                  'https://previews.123rf.com/images/glopphy/glopphy1703/glopphy170300106/74798864-pink-flower-closeup-vector-image-logo-design.jpg',
              }}
              style={styles.imgCard}
            />
          )}

          <View style={styles.viewInfo}>
            <Text style={styles.txtName}>{plant.nameVN}</Text>
            <Text style={styles.txtDec} numberOfLines={2}>
              {plant.characteristics}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default SearchResultList;
