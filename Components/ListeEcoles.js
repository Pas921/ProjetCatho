import React from 'react'
import { View, Text, FlatList } from 'react-native'

import * as liste from "../Helpers/liste.json"

const listeEcole = ( monPays ) => {

    const ecoles = [];

    for ( var i in liste ) {
        if ( liste[i].field1 == monPays ) {
            ecoles.push({ key: i, name :liste[i]['ECHANGES INTERNATIONAUX'] });
        }
    }

    return(ecoles);

}

class ListeEcoles extends React.Component {

    render() {

        return (

            <View>
                <FlatList
                    data = { listeEcole( this.props.name ) }
                    renderItem = { ( { item } ) => <Text> { item.name } </Text> }
                />
            </View>

        )

    }

}

export default ListeEcoles