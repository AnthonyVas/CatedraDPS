import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import mainTabScreen from './src/navigation/mainTabScreen';

//Components
import CustomDrawerContent from './src/navigation/CustomDrawerContent'
import dentisList from './src/navigation/dentisList';
import myAppointments from './src/navigation/myAppointments';
import bookAppointment from './src/navigation/bookAppointment';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName="Home" 
      headerMode="screen"
      drawerContent={(props)=> <CustomDrawerContent {...props}/>}
      >
        <Drawer.Screen name="Home" component={mainTabScreen} />
        <Drawer.Screen name="Doctores" component={dentisList} />
        <Drawer.Screen name="Mis Citas" component={myAppointments} />
        <Drawer.Screen name="Agendar Cita" component={bookAppointment} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

