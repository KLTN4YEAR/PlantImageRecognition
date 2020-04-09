import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './../screens/LoginScreen';
import PostScreen from '../screens/PostScreen';
import AddDetailScreen from '../screens/AddDetailScreen';
import CameraScreen from './../screens/CameraScreen';
import SearchScreen from './../screens/SearchScreen';
// import UserScreen from './../screens/UserScreen'
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewInfo from '../screens/ViewInfoScreen';
import EditInfo from '../screens/EditInfoScreen';

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
                    } else if (route.name === 'Camera') {
                      return <Icon name="camera" color={color} size={25} />;
                    } else if (route.name === 'Search') {
                      return <Icon name="search" color={color} size={25} />;
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
          <Tab.Screen name="Camera" component={CameraScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
    );
}

const StackUser = createStackNavigator();
function UserScreen({navigation}) {
  return (
          <StackUser.Navigator initialRouteName="ViewInfo">
            <StackUser.Screen
              name="ViewInfo"
              options={{headerShown: false}}
              component={ViewInfo}
            />
            <StackUser.Screen
              name="EditInfo"
              options={{
                title: 'Chỉnh sửa thông tin cá nhân',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
              component={EditInfo}
            />
          </StackUser.Navigator>
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
            name="Tab"
            options={{
                headerShown: false,
              }}
          //   options={({ navigation, route }) => ({
          //   header: props => <SearchHeader {...props} navigation={navigation} />,
          // })}
					  component={TabScreen}
				  />
			  </Stack.Navigator>
		  </NavigationContainer>
  );
}
const HomeStack = createStackNavigator();

function HomeScreen() {
  return (
      <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen
          name="Post"
          options={{ headerShown: false }}
          component={PostScreen}
        />
        <Stack.Screen
          name="AddDetail"
          options={{
            title: 'Đóng góp thông tin',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={AddDetailScreen}
        />
      </HomeStack.Navigator>
  );
}
export default NavigationScreen;