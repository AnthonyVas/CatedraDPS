import React,{useState, useEffect} from 'react'
import { View,Text} from 'react-native';
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
        <View>

            <Text>API response</Text>
                {
                    posts.map(post =>(<Text key={post.id} >{post.doctor},{post.paciente}</Text>) )
                }
        </View>
    )
}

export default DataFetchCitas
