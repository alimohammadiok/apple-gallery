import React from 'react'
import { Profile} from '../screens/profile'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Button,Text } from 'react-native';
import { FunctionTabs} from './functionTabs';
import HomeScreen from '../screens/home';

const Stack = createStackNavigator();

 export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" getComponent={() => require('../screens/home').default} />
        <Stack.Screen name="FunctionTabs"  getComponent={() => require('../routes/functionTabs').default} />
        // <Stack.Screen name="Settings" getComponent={() => require('../screens/settings').default} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
