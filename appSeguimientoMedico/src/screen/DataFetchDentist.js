import React,{useState, useEffect} from 'react'
import { View,Text,StyleSheet, Image, TouchableOpacity} from 'react-native';
import axios from 'axios'




function DataFetchCitas({correo}) {
    const[posts, setPost] =  useState([])
    console.log("correo en DATAFETCH:", correo)
    useEffect(() => {
        // axios.get(`https://proyectdps.000webhostapp.com/apislim3/cita/pruebasdps12@gmail.com`)
        axios.get(`https://proyectdps.000webhostapp.com/apislim3/getdoctor`)
        // axios.get(`https://proyectdps.000webhostapp.com/apislim3/cita/${correo}`)
        
        .then(res => {
            setPost(res.data)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return (
        
        <View style={styles.container}>
                {
                    posts.map(post =>(
                        
                            <TouchableOpacity  style={[styles.item]}>
                                <View style={{flexDirection:'row', justifyContent:"space-between", padding:10, backgroundColor:'#ABC8E2'}}>
                                <View >
                                    <Text style={[styles.name]}>{post.nombres} {post.apellidos}</Text>
                                    <Text style={[styles.info]}>{post.especialidad}</Text>
                                    <Text style={[styles.info]}>{post.address}</Text>
                                    <Text style={[styles.info]}>Contacto:</Text>
                                    <Text style={[styles.info]}>{post.correo}</Text>
                                    <Text style={[styles.info]}>{post.telefono}</Text>
                                </View>
                                <Image source={require('../images/doctor1.png')} style={{width:'24%', height:80, justifyContent:'center'}}/>
                                </View>
                            </TouchableOpacity>    
                                       
                    ))  
                }
        </View>
    )
}

export default DataFetchCitas

const styles = StyleSheet.create({
    container: {
      marginTop:0,
      backgroundColor:'#E1E6FA',
      marginBottom:0,
      height:'100%'
    },
    item: {
      padding: 5,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    name: {
      fontSize: 20,
    },
    info: {
      fontSize: 13,
    }
    
  });