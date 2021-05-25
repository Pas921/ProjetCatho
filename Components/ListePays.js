/**
 * Affiche la liste desécoles triées par pays
 */


import React from 'react'
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements';

import * as liste from "../Helpers/liste_accents.json"

const maListe = []
const search = ""
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
 */
const trisPays = () => {
    const pays = listePays();

    for ( var i in pays ) {
        maListe.push({ pays_key: i, pays_name: pays.sort()[i], ecoles: [] }) ;
    }

    return maListe;

}

/**
 * Pour chaques pays, crée la liste des écoles correspondante
 */
const listeEcole = () => {

    for ( var j in maListe ) {
        for ( var i in liste_fonction ) {
            if ( liste_fonction[i]['Pays '] == maListe[j].pays_name
                 && liste_fonction[i]['ECHANGES INTERNATIONAUX'] != ""
                 && liste_fonction[i]['ECHANGES INTERNATIONAUX'] != undefined ) {

                maListe[j].ecoles.push({ ecole_key: i, name: liste_fonction[i]['ECHANGES INTERNATIONAUX'] });
                
            }            
        }
    }

}

/**
 * Fonction de recherche associée à la SearchBar
 * Foretement inspiré du lien suivant : 
 *  https://www.freecodecamp.org/news/how-to-build-a-react-native-flatlist-with-realtime-searching-ability-81ad100f6699/
 * Je n'ai pas réussi à l'appliquer à mon code
 */
const searchFonction = (text) => {
    /*
    return maListe.filter(item => {

        const res = `${item.pays_name.toUpperCase()}`;
        const val = text.toUpperCase();

        return res.indexOf(val) > -1;

    })
    */
};


trisPays();
listeEcole();

class ListePays extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            loading: false,
            data: [],
            error: null,
        };
    
        this.arrayholder = [];
    }

    render () {

        // console.log(this.props)

        return (
            
            <View style={ styles.View }>
                <SearchBar placeholder="Rechercher pays ou école" onChangeText={ (text) => searchFonction(text) } lightTheme autoCorrect={false} value={search}/>
                <FlatList
                    data = { maListe }
                    renderItem = { ( { item } ) =>  (
                        <View>
                            <Text style={ styles.Pays }> { item.pays_name } </Text>
                            <FlatList
                                data = { maListe[item.pays_key].ecoles }
                                renderItem = { ( { item } ) => (
                                    <Button title={ item.name } onPress={ () => this.props.navigation.navigate('Ecole', { id: item.ecole_key }) } />
                                )}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>

        )
    }

}

const styles = StyleSheet.create({
    TextInput: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5
    },
    Pays: {
        fontSize: 20,
        fontWeight: "bold"
    },
    View: {
        marginBottom: 50
    },
  });

export default ListePays

/**
 * 
 */