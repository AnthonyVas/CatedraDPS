import React from "react";
import Login  from "./src/screens/login/login";
import SplashScreen from 'react-native-splash-screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import homeTest from './src/screens/login/homeTest';
import login from './src/screens/login/login';
export default function App() {
  //Hide Splash screen on app load.
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="login">
        {/* <Stack.Screen name="series" component={series}
        options={{
            title: 'Series',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
        }} /> */}
        <Stack.Screen name="homeTest" component={homeTest} />
        <Stack.Screen name="login" component={login} />
    </Stack.Navigator>
</NavigationContainer>
    // <Login></Login>
  );
 
}