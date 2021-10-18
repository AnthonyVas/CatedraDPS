import React, { useState } from "react";
import {View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,Image} from "react-native";

const DATA = [
  {
    id: "1",
    name: "Fernando Gomez",
    img:require("../images/doctor1.png"),
    address:"Col Médica, 27 Avenida Nte. No 1331",
    business_hours:"9:00–18:00",
    mail:"contactme@mail.com",
    phoneNumber:"7777-5656" 
  },
  {
    id: "2",
    name: "Wilson Aparicio",
    img:require("../images/doctor1.png"),
    address:"Col Médica, 27 Avenida Nte. No 1331",
    business_hours:"9:00–18:00",
    mail:"contactme@mail.com",
    phoneNumber:"7777-5656" 
  },
  {
    id: "3",
    name: "Oscar Chavez",
    img:require("../images/doctor1.png"),
    address:"Col Médica, 27 Avenida Nte. No 1331",
    business_hours:"9:00–18:00",
    mail:"contactme@mail.com",
    phoneNumber:"7777-5656" 
  },
  {
    id: "4",
    name: "Mauricio Contreras",
    img:require("../images/doctor1.png"),
    address:"Col Médica, 27 Avenida Nte. No 1331",
    business_hours:"9:00–18:00",
    mail:"contactme@mail.com",
    phoneNumber:"7777-5656" 
  },
  {
    id: "5",
    name: "Jorge Hernandez",
    img:require("../images/doctor1.png"),
    address:"Col Médica, 27 Avenida Nte. No 1331",
    business_hours:"9:00–18:00",
    mail:"contactme@mail.com",
    phoneNumber:"7777-5656" 
  },
  {
    id: "6",
    name: "Jose Diaz",
    img:require("../images/doctor1.png"),
    address:"Col Médica, 27 Avenida Nte. No 1331",
    business_hours:"9:00–18:00",
    mail:"contactme@mail.com",
    phoneNumber:"7777-5656" 
  },

  
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    
    <View style={{flexDirection:'row', justifyContent:"space-between", padding:10}}>
      <View>
        <Text style={[styles.name, textColor]}>{item.name}</Text>
        <Text style={[styles.info, textColor]}>{item.address}</Text>
        <Text style={[styles.info, textColor]}>Horario de atencion: {item.business_hours}</Text>
        <Text style= {textColor}>Contacto:</Text>
        <Text style={[styles.info, textColor]}>{item.mail}</Text>
        <Text style={[styles.info, textColor]}>{item.phoneNumber}</Text>
      </View>
      <Image source={item.img} style={{width:'24%', height:80, justifyContent:'center'}}/>
    </View>

  </TouchableOpacity>
);

const dentistList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#36558f" : "#96acb7";
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
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
  },
  info: {
    fontSize: 13,
  }
  
});

export default dentistList;