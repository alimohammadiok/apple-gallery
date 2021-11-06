  import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FunctionTabs} from './routes/functionTabs';

const Stack = createStackNavigator();

 function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"               getComponent={() => require('./screens/home').default} />
        <Stack.Screen name="FunctionTabs"       getComponent={() => require('./routes/functionTabs').default} />
        <Stack.Screen name="Settings"           getComponent={() => require('./screens/settings').default} />
        <Stack.Screen name="GoogleDriveScreen"  getComponent={() => require('./screens/googleDrive').default} />
        <Stack.Screen name="OneDriveScreen"     getComponent={() => require('./screens/oneDrive').default} />
        <Stack.Screen name="FilesScreen"        getComponent={() => require('./screens/files').default} />
        <Stack.Screen name="PhotoesScreen"      getComponent={() => require('./screens/photoes/photoes').default} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default function App() {
  return (
    <HomeStack />
  )

}