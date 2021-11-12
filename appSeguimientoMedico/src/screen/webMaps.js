import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const WebMaps = ({route}) => {
    const {sitio} = route.params;
    return (
        <WebView
        style={styles.webSize}
        source={{uri: sitio}}
        ></WebView>);
    }

export default WebMaps;

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
webSize: {
    width: '100%',
    height: '100%',
    },
    }
);
    