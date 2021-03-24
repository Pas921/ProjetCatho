import React from 'react'
import { View, Text, FlatList } from 'react-native'

import * as liste from "../Helpers/liste.json"

const pays = [];
const paystrie = [];
const ecoles = [];
var existe = 0;

const listePays = () => {

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
} 

const trisPays = () => {

    listePays();

    for ( var i in pays ) {

        paystrie.push({ key: pays.sort()[i] }) ;

    }

}

const listeEcole = ( monPays ) => {

    var temp = [];

    for ( var i in liste ) {
        if ( liste[i].field1 == monPays ) {
            temp.push(liste[i]['ECHANGES INTERNATIONAUX']) ;
        }
    }

    for ( var j in temp) {
        
        ecoles.push({ key: temp.sort()[j] })

    }

    return(ecoles);

}


trisPays()

class Essai extends React.Component {

    render() {

        return (

            <View>
                <FlatList
                    data = { paystrie }
                    renderItem = { ( { item } ) => <Text> { item.key } </Text> }
                />
            </View>

        )

    }

}

export default Essai