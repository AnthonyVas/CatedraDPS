import React from 'react';
import { Text, View } from 'react-native';

const mainTabScreen = ({route}) => {
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
      <Text>texto, variable:{correo}</Text>
    </View>
  )
}
export default mainTabScreen;