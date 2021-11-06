import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react'

function ProfileScreen() {
  return (
    <View>
      <Text> wecome to Profile page</Text>
    </View>
  ) ;
}

function FeedScreen() {
  return <View />;
}

function SettingsScreen() {
  return <View />;
}

const Tab = createBottomTabNavigator();

export default function FunctionTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}