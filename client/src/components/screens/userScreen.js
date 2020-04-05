import * as React from 'react';
import {View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {styles} from '../../public/styleSheets/styleViewInfo';
import {createStackNavigator} from '@react-navigation/stack';
import ViewInfo from '../user/viewInfo';
import EditInfo from '../user/editInfo';
const Stack = createStackNavigator();

export default function UserInfo({navigation}) {
  return (
    <View style={styles.container}>
      <Grid>
        <Row size={20} style={styles.viewAvatar}>
          <Avatar
            source={{
              uri:
                'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/s960x960/65817592_890571431296705_1761202617339346944_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=TlMqR_IUlvQAX8TWLO-&_nc_ht=scontent-hkt1-1.xx&_nc_tp=7&oh=4f55f320596b6864f7ddab43b4fa272d&oe=5E9768D2',
            }}
            showEditButton
            size="xlarge"
            rounded
            title="CR"
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
          />
        </Row>
        <Row size={80} style={styles.viewInfo}>
          <Stack.Navigator initialRouteName="ViewInfo">
            <Stack.Screen
              name="ViewInfo"
              options={{headerShown: false}}
              component={ViewInfo}
            />
            <Stack.Screen
              name="EditInfo"
              options={{
                headerShown: false,
              }}
              component={EditInfo}
            />
          </Stack.Navigator>
        </Row>
      </Grid>
    </View>
  );
}
