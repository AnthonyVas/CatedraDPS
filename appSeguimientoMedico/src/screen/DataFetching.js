import React,{useState, useEffect} from 'react'
import { View,Text} from 'react-native';
import axios from 'axios'

function DataFetching() {
    const[posts, setPost] =  useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
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
                    posts.map(post =>( <Text>{post.title}</Text>) )
                }
        </View>
    )
}

export default DataFetching
