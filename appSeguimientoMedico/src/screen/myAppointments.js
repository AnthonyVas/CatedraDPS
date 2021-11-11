
// import React, { useState, useEffect  } from "react";
// import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,View,Image} from "react-native";

// const getArticlesFromApi = async (correo) => {
//   let response = await fetch(
//     `https://proyectdps.000webhostapp.com/apislim3/cita/pruebasdps12@gmail.com`
//   );
//   let json  = await response.json();
//   console.log(json)
//   return json;
// };



import React from 'react';
import { Text, View } from 'react-native';
import DataFetching from './DataFetching';

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
      <DataFetching/>
    </View>
  )
}
export default myAppointments;