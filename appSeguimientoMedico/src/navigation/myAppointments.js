
import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,View,Image} from "react-native";

const DATA = [
  {
    id: "1",
    date: "24/10/21",
    appointmentTime: "9:45 AM",
    doctor: "Fernando Gomez",
    address: "Col Médica, 27 Avenida Nte. No 1331",
    mail:"contactme@mail.com",
    phoneNumber:"7777-5656",
    procedure: "Limpieza Dental"
  },
  {
    id: "2",
    date: "24/10/21",
    appointmentTime: "9:45 AM",
    doctor: "Fernando Gomez",
    address: "Col Médica, 27 Avenida Nte. No 1331",
    mail:"contactme@mail.com",
    phoneNumber:"7777-5656",
    procedure: "Limpieza Dental"
  },
  {
    id: "3",
    date: "24/10/21",
    appointmentTime: "9:45 AM",
    doctor: "Fernando Gomez",
    address: "Col Médica, 27 Avenida Nte. No 1331",
    mail:"contactme@mail.com",
    phoneNumber:"7777-5656",
    procedure: "Limpieza Dental"
  },
  {
    id: "4",
    date: "24/10/21",
    appointmentTime: "9:45 AM",
    doctor: "Fernando Gomez",
    address: "Col Médica, 27 Avenida Nte. No 1331",
    mail:"contactme@mail.com",
    phoneNumber:"7777-5656",
    procedure: "Limpieza Dental"
  },

  {
    id: "5",
    date: "24/10/21",
    appointmentTime: "9:45 AM",
    doctor: "Fernando Gomez",
    address: "Col Médica, 27 Avenida Nte. No 1331",
    mail:"contactme@mail.com",
    phoneNumber:"7777-5656",
    procedure: "Limpieza Dental"
  },
];

// new Date().toLocaleString
// //fechado
// const today = new Date()
// const tomorrow = new Date(today)
// tomorrow.setDate(tomorrow.getDate() + 1)


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  
  <TouchableOpacity onPress={onPress} style={backgroundColor}>
    <View style={{backgroundColor:'#8d99ae' ,mmarginRight:0, padding:0}}>
      <Text style={[styles.getDate]}>{item.date}</Text>
    </View>
    <View style={styles.dateContainer}>
      <Text style={[textColor, styles.dateTime]} >{item.appointmentTime}</Text>
      <View style={styles.dateInfoContainer}>
        <Text style={[textColor,styles.dateInfoText]}>{item.doctor}</Text>
        <Text style={[textColor,styles.dateInfoText]}>{item.procedure}</Text>
        <Text style={[textColor,styles.dateInfoText]}>{item.address}</Text>
        <Text style={[textColor,styles.dateInfoText]}>{item.mail}</Text>
        <Text style={[textColor,styles.dateInfoText]}>{item.phoneNumber}</Text>
      </View>
    </View>
  </TouchableOpacity>
);



const myAppointments = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#3c6e71" : "#284b63";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  dateTime:{
    justifyContent: 'center',
    marginTop:40

  },
  dateContainer: {
    padding: 10,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  getDate: {
    padding:5,
    fontSize:13,
    alignItems:'center',
    marginLeft:'6%',
    color:'white'
  },
  dateInfoContainer: {
    padding:5,
    fontSize:13,
    marginLeft:'6%',
  },
  dateInfoText: {
    fontSize:14,
    textAlign:"left",
  },
});

export default myAppointments;