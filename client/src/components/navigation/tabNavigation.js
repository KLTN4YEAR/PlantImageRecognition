import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import SearchScreen from '../screens/SearchScreen';
import CameraScreen from '../screens/cameraScreen';
import UserScreen from '../screens/userScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
export default function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return <Icon name="home" color={color} size={25} />;
          } else if (route.name === 'Search') {
            return <Icon name="search" color={color} size={25} />;
          } else if (route.name === 'Camera') {
            return <Icon name="camera" color={color} size={25} />;
          } else if (route.name === 'User') {
            return <Icon name="user" color={color} size={25} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showIcon: true,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
}
