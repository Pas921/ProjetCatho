import React from 'react'
import { View, Text } from 'react-native'

import * as ecoles from '../Helpers/liste.json'
import FiliereDispo from './FiliereDispo'


class Ecole extends React.Component {

    render() {
        //console.log(this.props.navigation.state.params.id)
        return (

            <View>
                <Text> { ecoles[this.props.navigation.state.params.id].field1 } </Text>
                <Text> { ecoles[this.props.navigation.state.params.id]['ECHANGES INTERNATIONAUX'] } </Text>
                {/*<Image source={{uri: 'https://lesfacultes.univ-catholille.fr/sites/default/files/styles/1094x461/public/panoramique_catho_0.jpg?itok=7vJS39ei'}}></Image>*/}
                <Text onPress={() => Linking.openURL( {/*importer le lien de l'ecole*/} )}> Site de l'école </Text>
                <Text> Niveau de langue demandé : { ecoles[this.props.navigation.state.params.id]['Niveau langues demand� / Acad�mique'] } </Text>
                <Text> Nombre de semestres disponibles : { ecoles[this.props.navigation.state.params.id]['Semestres dispo pour d�part 21-22'] } </Text>
                <FiliereDispo id = { this.props.navigation.state.params.id } />
                <Text> Calendrier academique : { /* importer le calendrier academique */ } </Text>
            </View>

        )

    }
}

export default Ecole