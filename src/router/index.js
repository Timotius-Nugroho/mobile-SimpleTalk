import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../pages/Splash';
import ChatList from '../pages/ChatList';
import ChatRoom from '../pages/ChatRoom';
import MyProfile from '../pages/MyProfile';
import FriendProfile from '../pages/FriendProfile';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="FriendProfile">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatList"
        component={ChatList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FriendProfile"
        component={FriendProfile}
        options={{headerShown: false}}
        initialParams={{id: null}}
      />
    </Stack.Navigator>
  );
};

export default Router;
