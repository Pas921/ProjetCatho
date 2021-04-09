import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

class Recherche extends React.Component {

    render() {

        return (

            <View style={{ marginTop: 20 }}>
                <TextInput placeholder="Rechercher pays ou école" style={styles.TextInput}/>
                <Button title="Rechercher" onPress={() => {}}/>
            </View>

        )

    }
}

const styles = StyleSheet.create({
    TextInput: {
      paddingTop: 10,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 5
    },
  });

export default Recherche