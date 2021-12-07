import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import Header from './src/components/Header';
import Resultado from './src/components/Resultado';

export default function App() {
  const [capital, setCapital] = useState('');
  const [taxa, setTaxa] = useState('');
  const [tempo, setTempo] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularJuros = () => {
    setResultado(capital * taxa * tempo);
    setCapital('');
    setTaxa('');
    setTempo('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Capital inicial"
        value={capital}
        onChangeText={(capital) => setCapital(capital)}
      />

      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Taxa de Juros"
        value={taxa}
        onChangeText={(taxa) => setTaxa(taxa)}
      />

      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Tempo"
        value={tempo}
        onChangeText={(tempo) => setTempo(tempo)}
      />

      <Resultado result={resultado} />

      <TouchableOpacity style={styles.botao} onPress={calcularJuros}>
        <Text style={styles.textBotao}>Calcular</Text>
      </TouchableOpacity>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  input: {
    margin: 10,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 15,
  },
  botao: {
    backgroundColor: '#D2691E',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    padding: 10,
  },
  textBotao: {
    fontSize: 25,
    color: '#FFF',
  },
});
