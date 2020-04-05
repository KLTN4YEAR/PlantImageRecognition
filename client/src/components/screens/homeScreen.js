import React from 'react';
import HomeCard from '../home/homeCard';
import {createStackNavigator} from '@react-navigation/stack';
import AddDetail from '../home/addDetail';


const Stack = createStackNavigator();
export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="HomeCard">
      <Stack.Screen
        name="HomeCard"
        options={{headerShown: false}}
        component={HomeCard}
      />
      <Stack.Screen
        name="AddDetail"
        options={{headerShown: false}}
        component={AddDetail}
      />
    </Stack.Navigator>
  );
}
