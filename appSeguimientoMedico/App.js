import React from "react";
import Login  from "./src/screens/login/login";
import SplashScreen from 'react-native-splash-screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import homeTest from './src/screens/login/homeTest';
import homeTest1 from './src/screen/homeTest';
import login from './src/screens/login/login';

export default function App() {
  //Hide Splash screen on app load
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="homeTest1" component={homeTest1}
         options={{ title: 'Overview', headerShown: false }} />
        <Stack.Screen
         name="login"
         component={login} 
         options={{ title: 'Overview', headerShown: false }}
         />
    </Stack.Navigator>
</NavigationContainer> 
  );
 
}