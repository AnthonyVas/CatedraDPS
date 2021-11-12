import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import { Card } from 'react-native-elements';


const mainTabScreen = ({route}) => {
  
    const users = [
      {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
      },
    ];
    return (
      <ScrollView style={{backgroundColor:'#E1E6FA'}}>
      <View style={{backgroundColor:'#E1E6FA'}}><Text style={styles.title}>Tu primera cita del dia</Text></View>
          <Card containerStyle={{backgroundColor:'#ABC8E2'}}>
            
            <Card.Title style={{backgroundColor:'#ABC8E2'}} >
              Consulta general
              {'\n'}9:00 AM
            </Card.Title>
            
            <Card.Divider style={{backgroundColor:'black'}} />
            {users.map((u, i) => {
              return (
                <View key={i} style={{backgroundColor:'#ABC8E2'}}>
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                  />
                  <View style={styles.mainInfo}>
                    <View style={styles.mainChildOne}>
                      <Text style={styles.name}>
                        <Text style={styles.nameParent}>Nombre:</Text>
                        {u.name}
                      </Text>
                      <Text style={styles.name}>
                        <Text style={styles.nameParent}>Celular:</Text> {74896175}
                      </Text>
                      <Text style={styles.name}>
                        <Text style={styles.nameParent}>Correo:</Text>{' '}
                        {'big@gmail.com'}
                      </Text>
                    </View>
                    <View style={styles.mainChildTwo}>
                      <Text style={styles.name}>
                        <Text style={styles.nameParent}>Sintomas: </Text> Dolor de
                        cabeza, irritacion trocopica, mocos en exceso
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </Card>
          <Card containerStyle={{backgroundColor:'#ABC8E2'}}>
          <Card.Title>
            Nota del paciente
          </Card.Title>
          <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />
          <Card.Divider />
          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
              </View>
            );
          })}
        </Card>
        <View><Text style={styles.title}>Proximas citas</Text></View>
        <ScrollView horizontal>
          <View style={styles.mainInfoOther}>
            <Card containerStyle={{backgroundColor:'#ABC8E2'}}>
              <Card.Title>
                Consulta general
                {'\n'}9:00 AM
              </Card.Title>
              <Card.Divider />
              {users.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={{ uri: u.avatar }}
                    />
                    <View style={styles.mainInfoParent}>
                      <View style={styles.mainChildOne}>
                        <Text style={styles.name}>
                          <Text style={styles.nameParent}>Nombre:</Text>
                          {u.name}
                        </Text>
                        <Text style={styles.name}>
                          <Text style={styles.nameParent}>Celular:</Text>{' '}
                          {74896175}
                        </Text>
                        <Text style={styles.name}>
                          <Text style={styles.nameParent}>Correo:</Text>{' '}
                          {'big@gmail.com'}
                        </Text>
                      </View>
                      <View style={styles.mainChildTwo}>
                        <Text style={styles.name}>
                          <Text style={styles.nameParent}>Sintomas: </Text> Dolor
                          de cabeza, irritacion trocopica, mocos en exceso
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </Card>
          </View>
          <View style={styles.mainInfoOther}>
            <Card containerStyle={{backgroundColor:'#ABC8E2'}}>
              <Card.Title>
                Consulta general
                {'\n'}9:00 AM
              </Card.Title>
              <Card.Divider style={{backgroundColor:'black'}} />
              {users.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={{ uri: u.avatar }}
                    />
                    <View style={styles.mainInfoParent}>
                      <View style={styles.mainChildOne}>
                        <Text style={styles.name}>
                          <Text style={styles.nameParent}>Nombre:</Text>
                          {u.name}
                        </Text>
                        <Text style={styles.name}>
                          <Text style={styles.nameParent}>Celular:</Text>{' '}
                          {74896175}
                        </Text>
                        <Text style={styles.name}>
                          <Text style={styles.nameParent}>Correo:</Text>{' '}
                          {'big@gmail.com'}
                        </Text>
                      </View>
                      <View style={styles.mainChildTwo}>
                        <Text style={styles.name}>
                          <Text style={styles.nameParent}>Sintomas: </Text> Dolor
                          de cabeza, irritacion trocopica, mocos en exceso
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </Card>
          </View>
        </ScrollView>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    mainInfo: {
      flex: 1,
      flexDirection: 'row',
    },
    mainInfoParent: {
      flex: 1,
      flexDirection: 'row',
    },
    mainChildOne: {
      width: '50%',
      marginRight: 8,
    },
    mainChildTwo: {
      width: '50%',
    },
    nameParent: {
      fontWeight: 'bold',
    },
    mainInfoOther: {
      flex: 1,
      width: 360,
      marginBottom:25
    },
    title:{
      textAlign:'center',
      fontSize: 30,
    },
    name:{
      
    },
    image:{
      
    },
    
  });
export default mainTabScreen;