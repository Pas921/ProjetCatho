import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Ecole from './Components/Ecole.js'
import Liste from './Components/Liste.js'
import Essai from './Components/Essai.js'
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Essai/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
