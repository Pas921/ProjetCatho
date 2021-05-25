import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'

import * as liste from '../Helpers/liste_accents.json'

const ecoles = liste[0]

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



const listeFiliereOui = ( monId ) => {

    const retour = []

    for ( var i in data ) {
        if ( ecoles[monId][ data[i] ] == "oui" ) {
            retour.push({key: data[i]})
        }
    }

    return retour;
} 

class FiliereDispo extends React.Component {

    render() {
        // console.log(this.props.id)
        return (

            <View>
                <Text> Filières compatibles : </Text>
                <FlatList
                    data = { listeFiliereOui( this.props.id ) }
                    renderItem = { ( { item } ) => <Text> - { item.key } </Text> }
                />
            </View>

        )

    }

}

export default FiliereDispo