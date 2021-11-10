import React, {uselayoutEffect, useState} from 'react';
import { View, TouchableOpacity,StyleSheet,Text, Image} from 'react-native';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';

//assets
import logout from "../images/logout.png"
import userPic from "../images/user1.png"


  
  export default function CustomDrawerContent(props) {
    return (
      <View style={styles.container}> 

        <View style={styles.profile}>
          <Image source={userPic} style={{height:155, width: "55%", justifyContent:'center', alignItems:'center'}}/>  
          <Text style={styles.profileName}>Lorem ipsum</Text>
        </View> 
       
        <DrawerContentScrollView {...props}>
          
          <DrawerItemList 
          {...props}
          activeBackgroundColor="white"
          labelStyle={{color:'#FFF'}}/>
        </DrawerContentScrollView>
        <DrawerItem

          // onPress
          // https://reactnavigation.org/docs/drawer-navigator/#props
          label="Sing-Out"
          labelStyle={{}}
          style={styles.inNout}
          icon = {() =>(
            <Image source={logout} style={{width:20, height:20, tintColor: "black"}}
          
            onPress={() => {
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
          }}
          />
          )}

        />
      </View>
    );
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#C4D7ED"
    },
    inNout: {
      marginBottom:30
    },

    profile: {
      height: 250,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'

    },
    profileName: {
      marginTop:20
    }
  });
