import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function PersonaFormulario() {
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
  const [opcion, setOpcion] = useState(false);
  const [numeroTelefono, setNumeroTelefono] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { value: 'first', label: 'Encendido' },
    { value: 'second', label: 'Apagado' },
    // Agrega más opciones según sea necesario
  ];

  const handleEnviar = () => {
    // Aquí podrías enviar los datos a un servidor, almacenarlos localmente, etc.
    console.log('Nombre:', nombre);
    console.log('Fecha de Nacimiento:', fechaNacimiento);
    console.log('Es Mayor de Edad:', opcion ? 'Sí' : 'No');
    console.log('Número de Teléfono:', numeroTelefono);
  };

  const handlePress = (value) => {
    setSelectedOption(value);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, React Native!</Text>
      </View>

      <View>
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.option,
              selectedOption === option.value && styles.selectedOption,
            ]}
            onPress={() => handlePress(option.value)}
          >
            <Text>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
          placeholder="Introduce nombre"
          value={nombre}
          onChangeText={setNombre}
        />
      </View>

      <Text>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />

      <Text>Fecha de Nacimiento:</Text>
      <DateTimePicker
        value={fechaNacimiento}
        mode="date"
        display="default"
        onChange={(event, selectedDate) => {
          setFechaNacimiento(selectedDate || fechaNacimiento);
        }}
      />

      <View style={styles.container}>
        <Text>{opcion ? 'Sí' : 'No'}</Text>
        <Switch
          value={opcion}
          onValueChange={setOpcion}
        />
      </View>

      <Text>Número de Teléfono:</Text>
      <TextInput
        style={styles.input}
        value={numeroTelefono}
        onChangeText={text => setNumeroTelefono(text.replace(/[^0-9]/g, ''))} // Solo números
        keyboardType="numeric"
      />

      <Button title="Enviar" onPress={handleEnviar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  option: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#eee',
  },
  selectedOption: {
    backgroundColor: 'lightblue',
  },
});
