import React from "react";
import Login  from "./src/screens/login/login";
import SplashScreen from 'react-native-splash-screen'


export default function App() {
  //Hide Splash screen on app load.
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return(
    <Login></Login>
  );
 
}