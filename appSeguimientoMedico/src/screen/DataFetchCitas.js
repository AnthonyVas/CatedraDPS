import React,{useState, useEffect} from 'react'
import { View,Text,StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import axios from 'axios'

function DataFetchCitas({correo}) {
    const[posts, setPost] =  useState([])
    console.log("correo en DATAFETCH:", correo)
    useEffect(() => {
        // axios.get(`https://proyectdps.000webhostapp.com/apislim3/cita/pruebasdps12@gmail.com`)
        // axios.get(`https://proyectdps.000webhostapp.com/apislim3/getdoctor`)
        axios.get(`https://proyectdps.000webhostapp.com/apislim3/cita/${correo}`)
        
        .then(res => {
            setPost(res.data)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return (
        
        <SafeAreaView  style={styles.container}>
            
                {
                    posts.map(post =>(
                        
                            <View style={{marginVertical: 8}}>
                                <TouchableOpacity  style={{backgroundColor:'white'}}>
                                    <View style={{backgroundColor:'#375D81' ,mmarginRight:0, padding:0}}>
                                        <Text style={[styles.getDate]}>{post.date}</Text>
                                    </View>
                                    <View style={styles.dateContainer}>
                                        <Text style={[styles.dateTime]} >{post.appointmentTime}</Text>
                                        <View style={styles.dateInfoContainer}>
                                        <Text style={[styles.dateInfoText]}>{post.doctor} </Text>
                                        <Text style={[styles.dateInfoText]}>{post.procedimiento}</Text>
                                        <Text style={[styles.dateInfoText_add]}>{post.address}</Text>
                                        <Text style={[styles.dateInfoText]}>contacto.clinca@gmail.com{post.mail}</Text>
                                        <Text style={[styles.dateInfoText]}>{post.telefono}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>    
                                       
                             ))  
                        }
            
        </SafeAreaView>
    )
}

export default DataFetchCitas

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      width:360  
    },
    item: {
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    dateTime:{
      justifyContent: 'center',
      marginTop:40
  
    },
    dateContainer: {
      padding: 10,
      flexDirection:'row',
      justifyContent:'space-between',
    },
    getDate: {
      padding:5,
      fontSize:13,
      alignItems:'center',
      marginLeft:'6%',
      color:'white'
    },
    dateInfoContainer: {
      padding:5,
      fontSize:13,
      marginLeft:'6%',
    },
    dateInfoContainer_add: {
      padding:5,
      fontSize:13,
      marginLeft:'6%',
      width:180
    },
    dateInfoText: {
      fontSize:14,
      textAlign:"left",
    },
  });
  