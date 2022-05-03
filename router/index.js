import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  GetStarted,
  Register,
  Login,
  UploadPhoto,
  Courts,
  Officer,
  Messages,
  ChooseOfficer,
  Chatting,
  OfficerProfile,
  UpdateProfile,
  UserProfile,
  News,
} from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Beranda" component={Officer} />
      <Tab.Screen name="Pesan" component={Messages} />
      <Tab.Screen name="Pengadilan" component={Courts} />
      <Tab.Screen name="Profil" component={UserProfile} />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Slash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChooseOfficer"
        component={ChooseOfficer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OfficerProfile"
        component={OfficerProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="News"
        component={News}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
