import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native'

import * as liste from "../Helpers/liste.json"

const listeEcole = ( monPays ) => {

    const ecoles = [];

    for ( var i in liste ) {
        if ( liste[i].field1 == monPays 
             && liste[i]['ECHANGES INTERNATIONAUX'] != ""
             && liste[i]['ECHANGES INTERNATIONAUX'] != undefined ) {
            ecoles.push({ key: i, name: liste[i]['ECHANGES INTERNATIONAUX'] });
        }
    }

    return(ecoles);

}

class ListeEcoles extends React.Component {

    render() {
        //console.log(this.props)
        return (

            <View>
                <FlatList
                    data = { listeEcole( this.props.name ) }
                    renderItem = { ( { item } ) => 
                        //<Text> { item.name } </Text> 
                        <Button title={ item.name } onPress={ () => this.props.nav.navigate('Ecole', { id: item.key }) } />
                    }
                />
            </View>

        )

    }

}

export default ListeEcoles