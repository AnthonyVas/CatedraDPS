import React from 'react';
import { Text, View,ScrollView} from 'react-native';
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
      <ScrollView>
        <DataFetcCitas correo = {correo}/>
      </ScrollView>
    </View>
  )
}
export default myAppointments;