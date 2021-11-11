import React from 'react';
import { Text, View } from 'react-native';
import DataFetcCitas from './DataFetchCitas';

const myAppointments = ({route}) => {
  const {correo} = route.params;
  console.log("correo pantalla principal:", correo)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E1E6FA"
      }}>
      <Text>pruebas de la api:{correo}</Text>
      <DataFetcCitas correo = {correo}/>
    </View>
  )
}
export default myAppointments;