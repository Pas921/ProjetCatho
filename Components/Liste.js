import React from 'react'
//import ecoles from '../Helpers/ListeEcoles.js'
import listePays from '../Helpers/ListePays'
import { View, Text, FlatList } from 'react-native'

class Liste extends React.Component {

    render() {

        return (
            <View>
                <FlatList data={listePays}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <Text>{item.pays}</Text> }></FlatList>
            </View>
        )
    }
}

export default Liste