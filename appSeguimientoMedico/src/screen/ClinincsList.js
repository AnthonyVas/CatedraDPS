import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WebMaps from './webMaps'
const Stack = createNativeStackNavigator();

const ClinicsLists = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{color: '#674', fontSize: 25, fontWeight: 'bold'}}>
                Clinicas Disponibles
            </Text>
            <TouchableHighlight
                style={styles.botones}
                onPress={() => navigation.navigate('WebMaps',{sitio:'joyaceren'})}
            >    
                <Text style={styles.texto}>CASA BLANCA</Text>
            </TouchableHighlight>
        </View>
        );
    
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
botones: {
    height: 40,
    width: 300,
    borderRadius: 10,
    backgroundColor: '#abc',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    },
texto: {
    color: '#fff',
    fontSize: 30,
    },
});

export default ClinicsLists;


