import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Ecole from './Components/Ecole.js'
import ListePays from './Components/ListePays.js'
import Navigation from './Navigation/Navigation.js'
import Filter from './Components/Filter.js'
import { StyleSheet, Text, View, Image } from 'react-native';
import react from 'react';
import ListeEcoles from './Components/ListeEcoles.js';

// lien conversion : https://pdfmall.com/fr/excel-to-json


export default class App extends react.Component {
  render () {
    return (
      <Filter/>
    )
  }
}

