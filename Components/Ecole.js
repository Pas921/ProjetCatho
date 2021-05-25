/**
 * Affichage des détails des écoles
 * Données récupérées dans le JSON
 * 
 * Revoir les onglets du Excel afin de pouvoir récupérer les noms de colonnes sur la page 2
 * 
 */


import React from 'react'
import { View, Text } from 'react-native'

import * as liste from '../Helpers/liste_accents.json'
import FiliereDispo from './FiliereDispo'

const ecoles = liste[0]

class Ecole extends React.Component {

    render() {

        return (

            <View>
                <Text> { ecoles[this.props.navigation.state.params.id]['Pays '] } </Text>
                <Text> { ecoles[this.props.navigation.state.params.id]['ECHANGES INTERNATIONAUX'] } </Text>
                {/*<Image source={{uri: 'https://lesfacultes.univ-catholille.fr/sites/default/files/styles/1094x461/public/panoramique_catho_0.jpg?itok=7vJS39ei'}}></Image>*/}
                <Text onPress={() => Linking.openURL( {/*importer le lien de l'ecole*/} )}> Site de l'école </Text>
                <Text> Niveau de langue demandé : { ecoles[this.props.navigation.state.params.id]['Niveau de langue'] } </Text>
                <Text> Nombre de semestres disponibles (Vague 1) : { ecoles[this.props.navigation.state.params.id]['Semestres dispo Vague 1'] } </Text>
                <Text> Nombre de semestres disponibles (Vague 2) : { ecoles[this.props.navigation.state.params.id]['Semestres dispo Vague 2 '] } </Text>
                <FiliereDispo id = { this.props.navigation.state.params.id } />
                <Text> Calendrier academique : { /* importer le calendrier academique */ } </Text>
            </View>

        )

    }
}

export default Ecole