import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native'

import * as liste from "../Helpers/liste_accents.json"

const listeEcole = ( info ) => {

    const ecoles = [];

    for ( var i in liste ) {
        if ( liste[i].field1 == info.key 
             && liste[i]['ECHANGES INTERNATIONAUX'] != ""
             && liste[i]['ECHANGES INTERNATIONAUX'] != undefined ) {
            info.ecoles.push({ key: i, name: liste[i]['ECHANGES INTERNATIONAUX'] });
        }
    }

    return(info.ecoles);

}

class ListeEcoles extends React.Component {

    render() {
        //console.log(this.props)
        return (

            <View>
                <FlatList
                    data = { listeEcole( this.props ) }
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