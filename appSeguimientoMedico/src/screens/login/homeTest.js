import * as React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { red100 } from 'react-native-paper/lib/typescript/styles/colors';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// import * as Google from 'expo-google-sign-in';
// console.log(Icon);
// const Stack = createNativeStackNavigator();

const login = ({navigation, route}) => {
    const {correo, nombre} = route.params;
    const [text, setText] = React.useState('');
    return (

        <View>
            <Text>Correo: {correo}</Text>
            <Text>Nombre: {nombre}</Text>
            {/* 
            <Button title={'Sign in with Google'} onPress={() => {
                GoogleSignin.configure({
                    androidClientId: '801356307136-dfdj7hnung2cvdh5ji9svmsikmq6mb45.apps.googleusercontent.com',
                    // iosClientId: 'ADD_YOUR_iOS_CLIENT_ID_HERE',
                });
                async function signIn() {
                    try {
                        await GoogleSignin.hasPlayServices();
                        const userInfo = await GoogleSignin.signIn();
                        //If login is successful you'll get user info object in userInfo below I'm just printing it to console. You can store this object in a usestate or use it as you like user is logged in.
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
                }
                signIn()
            }} /> */}

            <Button title={'Cerrar sesion'} onPress={() => {
                GoogleSignin.configure({
                    androidClientId: '801356307136-dfdj7hnung2cvdh5ji9svmsikmq6mb45.apps.googleusercontent.com',
                    // iosClientId: 'ADD_YOUR_iOS_CLIENT_ID_HERE',
                });
                //    async function getCurrentUser()  {
                //         const currentUser = await GoogleSignin.clearCachedAccessToken();
                //         this.setState({ currentUser });
                //       };
                //       getCurrentUser()
                async function signOut() {
                    try {
                        await GoogleSignin.signOut();
                        // this.setState({ user: null }); // Remember to remove the user from your app's state as well
                        setTimeout(() => navigation.navigate('login'), 1000);
                    } catch (error) {
                        console.error(error);
                    }
                };
                signOut()
            }} />



        </View>
    );
}
// const googleHanldeSingIn = () => {
//     const config = {
//         androidClientId: `801356307136-dfdj7hnung2cvdh5ji9svmsikmq6mb45.apps.googleusercontent.com`,
//         scopes: ['profile', 'email']
//     };

//     Google
//     .logInAsync(config)
//     .then((result) => {
//         const {type, user} = result;

//         if (type == 'success') {
//             const {email, name, photoUrl} =  user;
//             handleMessage('Se inicio sesion correctamente','SUCCESS');
//             setTimeout(() => navigation.navigate('Home', {email, name, photoUrl}), 1000)

//         }else{
//             handleMessage('Se cancelo el inicio de sesion');
//         }
//     })
//     .catch(error => {
//         console.log(error);
//         handleMessage('Ooops! Algo salio mal, culpa de Claro.');
//     })
// }

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
        height: '40%',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default login;