import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LoginScreen from './../screens/LoginScreen';
import PostScreen from '../screens/PostScreen';
import AddDetailScreen from '../screens/AddDetailScreen';
// import ImagePickerScreen from '../screens/ImagePickerScreen';
import PlantInfoScreen from '../screens/PlantInfoScreen';

// import ImagePickerScreen from '../test/RNCameraRealtimeScreen';
import ImagePickerScreen from '../test/RNCameraScreen';
import ResultRNCameraScreen from '../test/ResultRNCameraScreen';

import ResultCameraScreen from '../screens/ResultCameraScreen';
import SearchPlantScreen from './../screens/SearchScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewInfo from '../screens/ViewInfoScreen';
import EditInfo from '../screens/EditInfoScreen';
import ContributeScreen from "../screens/ContributeDetailScreen";
import CreatePostScreen from '../screens/CreatePostScreen';

import DetailPostScreen from '../screens/PostDetailScreen';

//idenity before create post
import ImageBeforePostScreen from '../test/ImageBeforePostScreen';
import ResultBeforePostScreen from '../test/ResultBeforePostScreen';

//màn hình loading
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

import ViewPostUser from "../screens/PostUserScreen";

import {useIsFocused} from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Camera"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return  <Icon name="home" color={color} size={35} />;
          } else if (route.name === 'User') {
            return <Icon name="user" color={color} size={35} />;
          } else if (route.name === 'Camera') {
            return <Icon name="camera" color={color} size={35} />;
          } else if (route.name === 'Search') {
            return <Icon name="search" color={color} size={35} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#33CC08',
        inactiveTintColor: 'rgba(209,242,194,0.2)',
        showIcon: true,
        showLabel: false,
        style: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#000000',
          position: 'absolute',
          bottom: 0,
          padding: 10,
          width: "100%",
          zIndex: 8,
          borderTopColor:'#000',
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

function UserScreen({navigation}) {
  return (
    <StackUser.Navigator initialRouteName="ViewInfo">
      <StackUser.Screen
        name="ViewInfo"
        options={{headerShown: false}}
        component={ViewInfo}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
      />
      <StackUser.Screen
        name="PostUser"
        options={{headerShown: false}}
        component={ViewPostUser}
      />
      <StackUser.Screen
        name="EditInfo"
        options={{
          title: 'Chỉnh sửa thông tin cá nhân',
          headerStyle: {
            backgroundColor: '#33CC08',
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

function CameraScreen() {
  return (
    <StackCamera.Navigator initialRouteName="ImagePicker">
      <StackCamera.Screen
        name="ImagePicker"
        options={{headerShown: false}}
        component={IMGPickerScreen}
      />
      <StackCamera.Screen
        name="PlantInfo"
        options={{headerShown: false}}
        component={PlantInfoScreen}
      />
      <StackCamera.Screen
        name="ResultRNCamera"
        options={{headerShown: false}}
        component={ResultRNCameraScreen}
      />
      <StackCamera.Screen
        name="ResultCamera"
        options={{
          title: 'Kết quả',
          headerStyle: {
            backgroundColor: '#33CC08',
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
};

function IMGPickerScreen({navigation}) {
  // This hook returns `true` if the screen is focused, `false` otherwise
  const isFocused = useIsFocused();
  return <ImagePickerScreen navigation={navigation} isFocused={isFocused} />;
}

const Stack = createStackNavigator();

function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Loading"
          options={{headerShown: false}}
          component={AuthLoadingScreen}
        />
        <Stack.Screen
          name="Tab"
          options={{headerShown: false}}
          component={TabScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeStack = createStackNavigator();

function HomeScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Post">
      <HomeStack.Screen
        name="Post"
        options={{headerShown: false}}
        component={PostScreen}
      />
      <HomeStack.Screen
        name="DetailPost"
        options={{headerShown: false}}
        component={DetailPostScreen}
      />
      <HomeStack.Screen
        name="AddDetail"
        options={{
          title: 'Đóng góp thông tin',
          headerStyle: {
            backgroundColor: '#33CC08',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={AddDetailScreen}
      />
      <HomeStack.Screen
        name="Contribute"
        options={{
          title: 'Chi tiết đóng góp',
          headerStyle: {
            backgroundColor: '#33CC08',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={ContributeScreen}
      />

      <HomeStack.Screen
        name="ImageBefore"
        options={{headerShown: false}}
        component={ImageBeforePostScreen}
      />
      <HomeStack.Screen
        name="ResultBefore"
        options={{headerShown: false}}
        component={ResultBeforePostScreen}
      />
      <HomeStack.Screen
        name="CreatePost"
        options={{headerShown: false}}
        component={CreatePostScreen}
      />
      <HomeStack.Screen
        name="PlantInfo"
        options={{headerShown: false}}
        component={PlantInfoScreen}
      />
    </HomeStack.Navigator>
  );
}

const SearchStack=createStackNavigator();
function SearchScreen() {
  return (
    <SearchStack.Navigator initialRouteName="Search">
      <SearchStack.Screen
        name="Search"
        options={{headerShown: false}}
        component={SearchPlantScreen}
      />
      <SearchStack.Screen
        name="PlantInfo"
        options={{headerShown: false}}
        component={PlantInfoScreen}
      />
    </SearchStack.Navigator>
  );
}

export default (NavigationScreen);
