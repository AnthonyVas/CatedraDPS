import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import mainTabScreen from './mainTabScreen';

//Components
import CustomDrawerContent from './CustomDrawerContent'
import dentisList from './dentisList';
import myAppointments from './myAppointments';
import bookAppointment from './bookAppointment';

const Drawer = createDrawerNavigator();

export default function homeTest() {
  return (
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
  
  );
}

