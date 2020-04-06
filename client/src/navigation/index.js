import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './../screens/LoginScreen';
import RegisterScreen from './../screens/RegisterScreen';
import SearchHeader from './../components/SearchHeader';
import HomeScreen from './../screens/HomeScreen';
import UserScreen from './../screens/UserScreen'
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();
function TabScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return <Icon name="home" color={color} size={25} />;
                    }  else if (route.name === 'User') {
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
            <Tab.Screen name="User" component={UserScreen} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

function NavigationScreen() {
  return (
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
						  header: props => <SearchHeader {...props} />,
					  }}
					  component={TabScreen}
				  />
			  </Stack.Navigator>
		  </NavigationContainer>
  );
}
export default NavigationScreen;