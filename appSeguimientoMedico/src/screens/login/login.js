import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { red100 } from 'react-native-paper/lib/typescript/styles/colors';


// console.log(Icon);

const login = () => {
    const [text, setText] = React.useState('');
    return (

        <View>
            <View style={styles.imageContainer} >
                <Image
                style={styles.image}
                    source={require('../../imgs/logosplash.png')}
                >

                </Image>
            </View>
            <View style={styles.container}>
                <TextInput
                    label="Usuario/Correo"
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    label="Contraseña"
                    value={text}
                    onChangeText={text => setText(text)}
                    style={styles.contra}
                />
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15
    },
    contra:{
        marginTop:15
    },
    image:{      
        width: '60%',
        height: '90%',
        // backgroundColor: 'yellow',
        
    },
    imageContainer:{
        marginTop: 50,
        height: '40%',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default login;