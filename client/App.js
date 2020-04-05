import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/components/login/loginScreen';
import TabScreen from './src/components/navigation/tabNavigation';
import RegisterScreen from './src/components/login/registerScreen';
import SearchBar from './src/components/search/searchBar';
const Stack = createStackNavigator();

export default function App() {
  return (
	  <Provider store={store}>
		  <NavigationContainer>
			  <Stack.Navigator initialRouteName="Login">
				  <Stack.Screen
					  name="Login"
					  options={{ headerShown: false }}
					  component={LoginScreen}
				  />
				  <Stack.Screen
					  name="Register"
					  options={{ headerShown: false }}
					  component={RegisterScreen}
				  />
				  <Stack.Screen
					  name="Tab"
					  options={{
						  header: props => <SearchBar {...props} />,
					  }}
					  component={TabScreen}
				  />
			  </Stack.Navigator>
		  </NavigationContainer>
	  </Provider>
  );
}
