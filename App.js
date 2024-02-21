import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RadioButtonExample = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioButtonPress = (value) => {
    setSelectedValue(value);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={() => handleRadioButtonPress('Automovil')}>
        <MaterialCommunityIcons name={selectedValue === 'Automovil' ? 'radiobox-marked' : 'radiobox-blank'} size={24} color="black" />
        <Text style={styles.optionText}> Automovil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleRadioButtonPress('Taxi')}>
        <MaterialCommunityIcons name={selectedValue === 'Taxi' ? 'radiobox-marked' : 'radiobox-blank'} size={24} color="black" />
        <Text style={styles.optionText}>Taxi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleRadioButtonPress('Camion')}>
        <MaterialCommunityIcons name={selectedValue === 'Camion' ? 'radiobox-marked' : 'radiobox-blank'} size={24} color="black" />
        <Text style={styles.optionText}> Camion</Text>
      </TouchableOpacity>

      <Text style={styles.selectedText}> Tipo: {selectedValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    marginLeft: 20,
    marginTop: 60,
  },

  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 20,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 20
  }

});

export default RadioButtonExample;
