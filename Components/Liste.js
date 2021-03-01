import React from 'react'
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