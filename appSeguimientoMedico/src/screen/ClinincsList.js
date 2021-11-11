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
            <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
                Clinicas Disponibles
            </Text>
            <TouchableHighlight
                style={styles.botones}
                onPress={() => navigation.navigate('WebMaps',{sitio:'https://www.google.com/maps/dir/13.6696591,-89.1801214/clinicas+dentales,+3a+Calle+Poniente,+San+Salvador/@13.6844064,-89.2505607,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8f632fdfe38fa023:0x44fe271a5b6f280c!2m2!1d-89.2475036!2d13.7042843'})}
            >    
                <Text style={styles.texto}>Clinicas Dentales</Text>
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.botones}
                onPress={() => navigation.navigate('WebMaps',{sitio:'https://www.google.com/search?q=clinicas%20dentales&oq=clinicas+dentales&aqs=chrome..69i57j0i402l2j0i512l7.3821j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=AOaemvLfkycWJkgbSSR-7MVJdoO49Uy9rw:1636596595704&rflfq=1&num=10&rldimm=13826565217117371338&lqi=ChFjbGluaWNhcyBkZW50YWxlc1obIhFjbGluaWNhcyBkZW50YWxlcyoGCAIQABABkgENZGVudGFsX2NsaW5pYw&ved=2ahUKEwjdqui1nY_0AhUTS_EDHcgrDQYQvS56BAgLEDw&rlst=f#rlfi=hd:;si:13826565217117371338,l,ChFjbGluaWNhcyBkZW50YWxlc1obIhFjbGluaWNhcyBkZW50YWxlcyoGCAIQABABkgENZGVudGFsX2NsaW5pYw;mv:[[13.714602999999999,-89.20153549999999],[13.676102499999999,-89.2632075]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2'})}
            >    
                <Text style={styles.texto}>Clínica Dental Dra. Marcela Merlos</Text>
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.botones}
                onPress={() => navigation.navigate('WebMaps',{sitio:'https://www.google.com/search?q=clinicas%20dentales&oq=clinicas+dentales&aqs=chrome..69i57j0i402l2j0i512l7.3821j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=AOaemvLfkycWJkgbSSR-7MVJdoO49Uy9rw:1636596595704&rflfq=1&num=10&rldimm=13826565217117371338&lqi=ChFjbGluaWNhcyBkZW50YWxlc1obIhFjbGluaWNhcyBkZW50YWxlcyoGCAIQABABkgENZGVudGFsX2NsaW5pYw&ved=2ahUKEwjdqui1nY_0AhUTS_EDHcgrDQYQvS56BAgLEDw&rlst=f#rlfi=hd:;si:12146560705840156260,l,ChFjbGluaWNhcyBkZW50YWxlc1obIhFjbGluaWNhcyBkZW50YWxlcyoGCAIQABABkgEHZGVudGlzdA;mv:[[13.714602999999999,-89.20153549999999],[13.676102499999999,-89.2632075]]'})}
            >    
                <Text style={styles.texto}>Clínica Dental Márquez</Text>
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.botones}
                onPress={() => navigation.navigate('WebMaps',{sitio:'https://www.google.com/search?q=clinicas%20dentales&oq=clinicas+dentales&aqs=chrome..69i57j0i402l2j0i512l7.3821j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=AOaemvLfkycWJkgbSSR-7MVJdoO49Uy9rw:1636596595704&rflfq=1&num=10&rldimm=13826565217117371338&lqi=ChFjbGluaWNhcyBkZW50YWxlc1obIhFjbGluaWNhcyBkZW50YWxlcyoGCAIQABABkgENZGVudGFsX2NsaW5pYw&ved=2ahUKEwjdqui1nY_0AhUTS_EDHcgrDQYQvS56BAgLEDw&rlst=f#rlfi=hd:;si:12146560705840156260,l,ChFjbGluaWNhcyBkZW50YWxlc1obIhFjbGluaWNhcyBkZW50YWxlcyoGCAIQABABkgEHZGVudGlzdA;mv:[[13.714602999999999,-89.20153549999999],[13.676102499999999,-89.2632075]]'})}
            >    
                <Text style={styles.texto}>Clínica Imagen Dental</Text>
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.botones}
                onPress={() => navigation.navigate('WebMaps',{sitio:'https://www.google.com/search?q=clinicas%20dentales&oq=clinicas+dentales&aqs=chrome..69i57j0i402l2j0i512l7.3821j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=AOaemvLfkycWJkgbSSR-7MVJdoO49Uy9rw:1636596595704&rflfq=1&num=10&rldimm=13826565217117371338&lqi=ChFjbGluaWNhcyBkZW50YWxlc1obIhFjbGluaWNhcyBkZW50YWxlcyoGCAIQABABkgENZGVudGFsX2NsaW5pYw&ved=2ahUKEwjdqui1nY_0AhUTS_EDHcgrDQYQvS56BAgLEDw&rlst=f#rlfi=hd:;si:14865297507106813717,l,ChFjbGluaWNhcyBkZW50YWxlc5IBB2RlbnRpc3Q;mv:[[13.714602999999999,-89.20153549999999],[13.676102499999999,-89.2632075]]'})}
            >    
                <Text style={styles.texto}>Clínica Dental Shalom</Text>
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
    backgroundColor: '#708090',
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


