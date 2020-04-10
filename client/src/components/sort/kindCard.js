import * as React from 'react';
import {Text, ImageBackground, View, TouchableOpacity} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {styles} from './../../public/styleSheets/styleKindCard';

export default function KindCard({navigation}) {
  return (
    <View style={styles.container}>
      <Grid>
        <Row size={1}>
          <TouchableOpacity onPress={() => navigation.navigate('ListSort')}>
            <ImageBackground
              style={styles.imgCard}
              source={require('../../public/images/vu.jpg')}>
              <Text style={styles.txtName}>Hoa</Text>
            </ImageBackground>
          </TouchableOpacity>
        </Row>
        <Row size={1}>
          <TouchableOpacity onPress={() => navigation.navigate('ListSort')}>
            <ImageBackground
              style={styles.imgCard}
              source={require('../../public/images/vu.jpg')}>
              <Text style={styles.txtName}>Cây</Text>
            </ImageBackground>
          </TouchableOpacity>
        </Row>
      </Grid>
    </View>
  );
}
