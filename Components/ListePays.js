import React from 'react'
import { View, Text, FlatList } from 'react-native'
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

        return (

            <View>
                <FlatList
                    data = { trisPays() }
                    renderItem = { ( { item } ) =>  (
                        <View>
                            <Text style={{fontWeight: "bold"}}> { item.key } </Text>
                            <ListeEcoles name = { item.key } />
                        </View>
                    ) }
                />
            </View>

        )
    }

}

export default ListePays