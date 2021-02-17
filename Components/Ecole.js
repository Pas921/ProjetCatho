import React from 'react'
import { View, Text, Image } from 'react-native'

class Ecole extends React.Component {

    render() {

        return (

            <View>
                <Text>Nom de l'école</Text>
                <Image source={{uri: 'https://lesfacultes.univ-catholille.fr/sites/default/files/styles/1094x461/public/panoramique_catho_0.jpg?itok=7vJS39ei'}}></Image>
                <Text>Adresse</Text>
                <Text>Filière compatible</Text>
                <Text>Niveau de langue demandé</Text>
                <Text>Nombre de semestres</Text>
            </View>

        )

    }
}

export default Ecole