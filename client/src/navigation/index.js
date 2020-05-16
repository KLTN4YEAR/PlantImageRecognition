import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './../screens/LoginScreen';
import PostScreen from '../screens/PostScreen';
import AddDetailScreen from '../screens/AddDetailScreen';
import ImagePickerScreen from '../screens/ImagePickerScreen';
import PlantInfoScreen from '../screens/PlantInfoScreen';

// import ImagePickerScreen from '../components/TfliteView';

import ResultCameraScreen from '../screens/ResultCameraScreen'
import SearchScreen from './../screens/SearchScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewInfo from '../screens/ViewInfoScreen';
import EditInfo from '../screens/EditInfoScreen';
import CreatePostScreen from '../screens/CreatePostScreen';



const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return <Icon name="home" color={color} size={28} />;
          } else if (route.name === 'User') {
            return <Icon name="user" color={color} size={28} />;
          } else if (route.name === 'Camera') {
            return <Icon name="camera" color={color} size={28} />;
          } else if (route.name === 'Search') {
            return <Icon name="search" color={color} size={28} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#59c393',
        inactiveTintColor: '#AFFABA',
        showIcon: true,
        style:{borderRadius:20},
        tabStyle:{borderRadius:20},
        labelStyle: {
          fontSize: 12,
          fontFamily: 'Calibri',
          letterSpacing: 1,
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="User" component={UserScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}

const StackUser = createStackNavigator();

function UserScreen({ navigation }) {
  return (
    <StackUser.Navigator initialRouteName="ViewInfo">
      <StackUser.Screen
        name="ViewInfo"
        options={{ headerShown: false }}
        component={ViewInfo}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
      />
      <StackUser.Screen
        name="EditInfo"
        options={{
          title: 'Chỉnh sửa thông tin cá nhân',
          headerStyle: {
            backgroundColor: '#59c393',
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

const StackCamera = createStackNavigator();

function CameraScreen({ navigation }) {
  return (
    <StackCamera.Navigator initialRouteName="ImagePicker">
      <StackUser.Screen
        name="ImagePicker"
        options={{headerShown: false}}
        component={ImagePickerScreen}
      />
      <StackUser.Screen
        name="PlantInfo"
        options={{headerShown: false}}
        component={PlantInfoScreen}
      />
      <StackUser.Screen
        name="ResultCamera"
        options={{
          title: 'Kết quả',
          headerStyle: {
            backgroundColor: '#59c393',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={ResultCameraScreen}
      />
    </StackCamera.Navigator>
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
          options={{ headerShown: false }}
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
            backgroundColor: '#59c393',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={AddDetailScreen}
      />
      <Stack.Screen
        name="CreatePost"
        options={{
          title: 'Tạo bài viết mới',
          headerStyle: {
            backgroundColor: '#59c393',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={CreatePostScreen}
      />
    </HomeStack.Navigator>
  );
}

export default NavigationScreen;