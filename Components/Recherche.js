import React from 'react'
import { View, TextInput, Button, FlatList } from 'react-native'

class Recherche extends React.Component {

    render() {

        return (

            <View>
                <TextInput placeholder="Recherche"/>
                <Button title="Rechercher" onPress={() => {}}/>
                <FlatList data={}></FlatList>
            </View>

        )

    }
}

export default Recherche