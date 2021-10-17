import React, {uselayoutEffect, useState} from 'react';
import { View, TouchableOpacity,StyleSheet,Text, Image} from 'react-native';

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
            <Image source={logout} style={{width:20, height:20, tintColor: "black"}}/>
          )}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white"
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
