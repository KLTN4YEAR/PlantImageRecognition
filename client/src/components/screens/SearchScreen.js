import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import KindCard from '../sort/kindCard';
import ListSort from '../sort/listSort';

const Stack = createStackNavigator();

export default function SearchScreen() {
  return (
    <Stack.Navigator initialRouteName="KindCard">
      <Stack.Screen
        name="KindCard"
        options={{headerShown: false}}
        component={KindCard}
      />
      <Stack.Screen
        name="ListSort"
        options={{headerShown: false}}
        component={ListSort}
      />
    </Stack.Navigator>
  );
}
