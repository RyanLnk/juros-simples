import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Juros Simples</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFF',
  },
});
