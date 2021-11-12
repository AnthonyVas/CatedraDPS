import React from "react";
import {View, StyleSheet,ScrollView} from "react-native";
import DataFetcDentist from './DataFetchDentist'

const dentistList = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <DataFetcDentist/>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:0,
    // backgroundColor:'#E1E6FA'
  },

  
});

export default dentistList;