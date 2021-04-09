import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Recherche from './Components/Recherche.js'
import Ecole from './Components/Ecole.js'
import ListePays from './Components/ListePays.js'
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Recherche/>
      <ListePays/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
