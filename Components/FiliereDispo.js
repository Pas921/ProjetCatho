import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'

import * as ecoles from '../Helpers/liste.json'

const data = [
    "L2 Eco Fi",
    "L2 Eco  Fi + Cl sup",
    "L2 Gestion",
    "L2 Gest + Cl sup",
    "L2 CFA",
    "L3 Eco Fi",
    "L3 Eco inter",
    "L3 Gestion",
    "L3 CFA",
    "Prépa 3 Eco",
    "Prépa 3 Gestion",
    "Parcours Rizomm Eco",
    "Parcours Rizomm Ges",
    "M1 FEM",
    "M1 ME",
    "M1 IM",
    "M2 IM",
    "DU MGI"
]

const retour = []

const listeFiliereOui = () => {
    for ( var i in data ) {
        if (ecoles[4][ data[i] ] == "oui") {
            retour.push({key: data[i]})
        }
    }
} 

listeFiliereOui()

class FiliereDispo extends React.Component {

    render() {

        return (

            <View>
                <Text> Filières compatibles : </Text>
                <FlatList
                    data = { retour }
                    renderItem = { ( { item } ) => <Text> - { item.key } </Text> }
                />
            </View>

        )

    }

}

export default FiliereDispo