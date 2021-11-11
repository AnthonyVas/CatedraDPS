import React from "react";
import {View, StyleSheet, Text, TouchableOpacity,Image} from "react-native";
import DataFetcDentist from './DataFetchDentist'


// const DATA = [
//   {
//     id: "1",
//     name: "Fernando Gomez",
//     img:require("../images/doctor1.png"),
//     address:"Col Médica, 27 Avenida Nte. No 1331",
//     business_hours:"9:00–18:00",
//     mail:"contactme@mail.com",
//     phoneNumber:"7777-5656" 
//   },
//   {
//     id: "2",
//     name: "Wilson Aparicio",
//     img:require("../images/doctor1.png"),
//     address:"Col Médica, 27 Avenida Nte. No 1331",
//     business_hours:"9:00–18:00",
//     mail:"contactme@mail.com",
//     phoneNumber:"7777-5656" 
//   },
//   {
//     id: "3",
//     name: "Oscar Chavez",
//     img:require("../images/doctor1.png"),
//     address:"Col Médica, 27 Avenida Nte. No 1331",
//     business_hours:"9:00–18:00",
//     mail:"contactme@mail.com",
//     phoneNumber:"7777-5656" 
//   },
//   {
//     id: "4",
//     name: "Mauricio Contreras",
//     img:require("../images/doctor1.png"),
//     address:"Col Médica, 27 Avenida Nte. No 1331",
//     business_hours:"9:00–18:00",
//     mail:"contactme@mail.com",
//     phoneNumber:"7777-5656" 
//   },
//   {
//     id: "5",
//     name: "Jorge Hernandez",
//     img:require("../images/doctor1.png"),
//     address:"Col Médica, 27 Avenida Nte. No 1331",
//     business_hours:"9:00–18:00",
//     mail:"contactme@mail.com",
//     phoneNumber:"7777-5656" 
//   },
//   {
//     id: "6",
//     name: "Jose Diaz",
//     img:require("../images/doctor1.png"),
//     address:"Col Médica, 27 Avenida Nte. No 1331",
//     business_hours:"9:00–18:00",
//     mail:"contactme@mail.com",
//     phoneNumber:"7777-5656" 
//   },

  
// ];

const dentistList = () => {
  return (
    <View>
      <DataFetcDentist/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:0,
    backgroundColor:'#white'
    // backgroundColor:'#E1E6FA'
  },

  
});

export default dentistList;