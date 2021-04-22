import React from 'react'
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native'
import ListeEcoles from './ListeEcoles'

import * as liste from "../Helpers/liste.json"

const listePays = () => {
    const pays = [];
    var existe = 0;

    for ( var i in liste ) {
        for ( var j in pays ) {

            if ( liste[i].field1 == pays[j]
                || liste[i].field1 == "Europe - Erasmus" 
                || liste[i].field1 == "Europe - Hors Erasmus - MIC ou conventions globales" 
                || liste[i].field1 == "Europe - Hors Erasmus" 
                || liste[i].field1 == "Hors Europe - Bilat�rales et Conventions globales ou ICL"
                || liste[i].field1 == "Total disponible"
                || liste[i].field1 == "" ) {

                existe = 1 ;
            }
        }
        if ( existe == 0 ) {

            pays.push(liste[i].field1)

        }
        existe = 0 ;
    }
    return pays;
} 

const trisPays = () => {
    const pays = listePays();
    const paystrie = [];

    for ( var i in pays ) {
        paystrie.push({ key: pays.sort()[i] }) ;
    }

    return paystrie;
}



class ListePays extends React.Component {

    render () {
        //console.log(this.props)
        return (

            <View>
                <TextInput placeholder="Rechercher pays ou école" style={styles.TextInput}/>
                <Button title="Rechercher" onPress={() => {}}/>
                <FlatList
                    data = { trisPays() }
                    renderItem = { ( { item } ) =>  (
                        <View>
                            <Text style={ styles.Pays }> { item.key } </Text>
                            <ListeEcoles name = { item.key } nav = { this.props.navigation } />
                        </View>
                    ) }
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
    }
  });

export default ListePays