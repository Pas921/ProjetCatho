import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import SelectPicker from 'react-native-form-select-picker';

import * as liste from "../Helpers/liste_accents.json"

const maListe = [];
const liste_fonction = liste[0];

/**
 * Récupère l'ensemble des pays du fichier JSON
 * @returns une liste de pays
 */
 const listePays = () => {

    const pays = [];
    var existe = 0;

    for ( var i in liste_fonction ) {
        for ( var j in pays ) {

            if ( liste_fonction[i]['Pays '] == pays[j]
                || liste_fonction[i]['Pays '] == "Europe - Erasmus" 
                || liste_fonction[i]['Pays '] == "Europe - Hors Erasmus - MIC ou conventions globales" 
                || liste_fonction[i]['Pays '] == "Europe - Hors Erasmus" 
                || liste_fonction[i]['Pays '] == "Hors Europe - Bilat�rales et Conventions globales ou ICL"
                || liste_fonction[i]['Pays '] == "Total disponible"
                || liste_fonction[i]['Pays '] == "" ) {

                existe = 1 ;
            }
        }
        if ( existe == 0 ) {

            pays.push(liste_fonction[i]['Pays '])

        }
        existe = 0 ;
    }
    return pays;
} 

/**
 * Insère dans maListe les pays de listepays() triés par ordre alphabétiques
 * @returns la liste des pays triés
 */
const trisPays = () => {
    const pays = listePays();

    for ( var i in pays ) {
        maListe.push({ pays_key: i, pays_name: pays.sort()[i], ecoles: [] }) ;
    }

    return maListe;

}

trisPays();

class Filter extends React.Component {

    render() {

        return (
            <View>
                <SelectPicker>
                    {Object.values(maListe).map((val, index) => 
                        <SelectPicker.Item label={val} value={val} key={index} />
                    )}
                </SelectPicker>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    TextInput: {
      paddingTop: 10,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 5
    },
  });

export default Filter