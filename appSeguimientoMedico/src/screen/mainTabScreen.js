import React from 'react';
import { Text, View } from 'react-native';


// const getData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('@storage_Key')
//     if(value !== null) {
//       // value previously stored
//     }
//   } catch(e) {
//     // error reading value
//   }
// }

const mainTabScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E1E6FA"
      }}>
      <Text>texto, variable:</Text>
    </View>
  )
}
export default mainTabScreen;