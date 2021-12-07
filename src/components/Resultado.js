import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Resultado = ({ result }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Juros: R$ {result}</Text>
    </View>
  );
};

export default Resultado;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: '#FFF',
  },
});
