import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../login/loginScreen';
import TabScreen from '../screens/tabNavigation';
import RegisterScreen from '../login/registerScreen';

const Stack = createStackNavigator();

export default function StackIndex() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{ headerShown: false }}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Tab"
          options={{ headerShown: false }}
          component={TabScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
