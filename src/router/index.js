import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../pages/Splash';
import ChatList from '../pages/ChatList';
import ChatRoom from '../pages/ChatRoom';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
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
    </Stack.Navigator>
  );
};

export default Router;
