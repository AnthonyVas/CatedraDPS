import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { Picker } from '@react-native-picker/picker';
//import shortid from 'shortid'

const bookAppointment = () => {
    //Variables cita
    const [dentist, saveDentist] = useState();
    const [date, saveDate] = useState('');
    const [time, saveTime] = useState('');
    const [symptoms, saveSymptoms] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    // Muestra u oculta el Date Picker
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const confirmDate = date => {
        const opc = { year: 'numeric', month: 'long', day: "2-digit" };
        saveDate(date.toLocaleDateString('es-ES', opc));
        hideDatePicker();
    };
    // Muestra u oculta el Time Picker
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };
    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };
    const confirmTime = time => {
        const opc = { hour: 'numeric', minute: '2-digit', hour12: false };
        saveTime(time.toLocaleString('es-ES', opc));
        hideTimePicker();
    };
    const createNewAppointment = () => {

    }
    // Muestra la alerta si falla la validación
    const showAlert = () => {
        Alert.alert('Error', 'Todos los campos son obligatorios', [{ text: 'OK' }])
    }
    return (
        <>
            <ScrollView style={styles.formulario}>
                <View>
                    <Picker
                        selectedValue={dentist}
                        onValueChange={(itemValue, itemIndex) =>
                            saveDentist(itemValue)
                        }>
                        <Picker.Item label="John Smith" value="1" />
                        <Picker.Item label="Mark Johnson" value="2" />
                    </Picker>
                </View>
                <View>
                    <Text style={styles.label}>Fecha:</Text>
                    <Button title="Seleccionar Fecha" onPress={showDatePicker}
                    color="#375D81" />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmDate}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                        headerTextIOS="Elige la fecha"
                        cancelTextIOS="Cancelar"
                        confirmTextIOS="Confirmar"
                        
                    />
                    <Text>{date}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Hora:</Text>
                    <Button title="Seleccionar Hora" onPress={showTimePicker} 
                    color="#375D81" />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmTime}
                        onCancel={hideTimePicker}
                        locale='es_ES'
                        headerTextIOS="Elige una Hora"
                        cancelTextIOS="Cancelar"
                        confirmTextIOS="Confirmar"
                    />
                    <Text>{time}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Síntomas:</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        onChangeText={texto => saveSymptoms(texto)}
                    />
                </View>
                <View>
                    <TouchableHighlight onPress={() => createNewAppointment()}
                        style={styles.btnSubmit}>
                        <Text style={styles.textoSubmit}>Crear Nueva Cita</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#E1E6FA',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: 'white'
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: '#183152',
        marginVertical: 10,
        fontWeight:'600'
    },
    textoSubmit: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
export default bookAppointment;