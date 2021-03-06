import * as React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Divider } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { red100, white } from 'react-native-paper/lib/typescript/styles/colors';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import homeTest from './homeTest';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {homeTest1 } from  '../../screen/homeTest'


// import * as Google from 'expo-google-sign-in';
// console.log(Icon);
const Stack = createNativeStackNavigator();

const login = ({ navigation }) => {
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

            <View style={styles.btnLoginContainer}>

                <TouchableOpacity
                    style={styles.btnInicioSesion}
                 onPress={() => {navigation.navigate('homeTest1') }}
                >
                    <Text style={styles.btnTextInicioSesion}>Iniciar de sesion</Text>
                </TouchableOpacity>



                <View style={styles.lineContainer}>
                    <Divider height={15} style={styles.line} />
                </View>

                <Icon.Button
                    style={styles.btnGoogle}
                    title={'Sign in with Google'}
                    name="google"
                    onPress={() => {
                        GoogleSignin.configure({
                            androidClientId: '801356307136-dfdj7hnung2cvdh5ji9svmsikmq6mb45.apps.googleusercontent.com',
                            // iosClientId: 'ADD_YOUR_iOS_CLIENT_ID_HERE',
                        });
                        async function signIn() {
                            try {
                                await GoogleSignin.hasPlayServices();
                                const userInfo = await GoogleSignin.signIn();
                                //If login is successful you'll get user info object in userInfo below I'm just printing it to console. You can store this object in a usestate or use it as you like user is logged in.
                                setTimeout(() => navigation.navigate('homeTest', { correo: userInfo.user.email, nombre: userInfo.user.name }), 1000);
                                // onPress={() => navigation.navigate('homeTest')}

                                console.log(userInfo)
                            } catch (error) {
                                if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                                    alert("You cancelled the sign in.");
                                } else if (error.code === statusCodes.IN_PROGRESS) {
                                    alert("Google sign In operation is in process");
                                } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                                    alert("Play Services not available");
                                } else {
                                    alert("Something unknown went wrong with Google sign in. " + error.message);
                                }
                            }
                            // const 
                        }
                        signIn()
                        // signOut = async () => {
                        //     try {
                        //       await GoogleSignin.signOut();
                        //       this.setState({ user: null }); // Remember to remove the user from your app's state as well
                        //     } catch (error) {
                        //       console.error(error);
                        //     }
                        //   };
                        //   signOut()
                    }}
                >
                    Iniciar con Google
                </Icon.Button>
                <View style={styles.registrarseContainer}>
                    <Text>
                        ¿No tienes cuenta aun? Registrarme!
                    </Text>
                </View>

            </View>






        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        margin: 15
    },
    contra: {
        marginTop: 15
    },
    image: {
        width: '60%',
        height: '90%',
        // backgroundColor: 'yellow',

    },
    imageContainer: {
        marginTop: 50,
        height: '35%',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnGoogle: {
        backgroundColor: '#374140',
        alignItems: 'center',
        justifyContent: 'center',
        height:40
    },
    btnLoginContainer: {
        margin: '5%'
    },
    lineContainer: {
        alignItems: 'center'
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#111',
        marginBottom: 10,
        width: '90%',


    },
    registrarseContainer: {
        alignItems: 'center',
        marginTop: 5
    },
    btnInicioSesion: {
        height: 40,
        color: 'white',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        backgroundColor: '#65dd68', 
        borderRadius:5
    },
    btnTextInicioSesion:{
        fontWeight:'600'
    }
})
export default login;