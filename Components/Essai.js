import React from 'react'
import { View, Text, FlatList } from 'react-native'

import * as liste from "../Helpers/liste.json"

const pays = []
var existe = 0

const listePays = () => {
    for ( var i in liste ) {
        for ( var j in pays ) {
            if (liste[i].field1 == pays[j].key ) {
                existe = 1
            }
        }
        if (existe == 0) {
            pays.push({ key: liste[i].field1 })
        }
        existe = 0
    }
} 

listePays()
console.log(pays)

class Essai extends React.Component {

    render() {

        return (

            <View>
                <FlatList
                    data = { pays }
                    renderItem = { ( { item } ) => <Text> { item.key } </Text> }
                />
            </View>

        )

    }

}

export default Essai