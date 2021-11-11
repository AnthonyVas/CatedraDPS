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
import ClinicsList from './ClinincsList'
import WebMaps from './webMaps';

const Drawer = createDrawerNavigator();

export default function homeTest({navigation, route}) {
  const {correo} = route.params;
  console.log("correo:", correo)

  return (
      <Drawer.Navigator 
      initialRouteName="Home" 
      headerMode="screen"
      drawerContent={(props)=> <CustomDrawerContent {...props}/>}
      >
        <Drawer.Screen name="Home" initialParams={{ correo }} component={mainTabScreen} />
        <Drawer.Screen name="Doctores"  initialParams={{ correo }} component={dentisList} />
        <Drawer.Screen name="Mis Citas" initialParams={{ correo }}  component={myAppointments} />
        <Drawer.Screen name="Agendar Cita" initialParams={{ correo }}  component={bookAppointment} />
        <Drawer.Screen name="Clinicas"  initialParams={{ correo }}  component={ClinicsList}  />
      </Drawer.Navigator>
  
  );
}

