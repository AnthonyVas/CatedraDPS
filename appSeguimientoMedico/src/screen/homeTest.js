import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import mainTabScreen from './mainTabScreen';

//Components
import CustomDrawerContent from './CustomDrawerContent'
import dentisList from './dentisList';
import myAppointments from './myAppointments';
import ClinicsList from './ClinincsList'

const Drawer = createDrawerNavigator();

export default function homeTest({navigation, route}) {
  const {correo} = route.params;
  const {nombre} = route.params;
  

  return (
      <Drawer.Navigator 
      initialRouteName="Home" 
      headerMode="screen"
      drawerContent={(props)=> <CustomDrawerContent {...props} nombres={nombre} />}
      >
        <Drawer.Screen name="Inicio" initialParams={{ correo }} component={mainTabScreen} />
        <Drawer.Screen name="Doctores"  initialParams={{ correo }} component={dentisList} />
        <Drawer.Screen name="Mis Citas" initialParams={{ correo }}  component={myAppointments} />
        <Drawer.Screen name="Clinicas"  initialParams={{ correo }}  component={ClinicsList}  />
      </Drawer.Navigator>
  
  );
}

