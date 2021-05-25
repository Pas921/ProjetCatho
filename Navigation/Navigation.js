/**
 * Fichier de navigation
 */


import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import ListePays from '../Components/ListePays'
import ListeEcole from '../Components/ListeEcoles'
import Ecole from '../Components/Ecole'
import FiliereDispo from '../Components/FiliereDispo'
import Filter from '../Components/Filter'


const AppStackNavigator = createStackNavigator({

    ListePays: {
        screen: ListePays,
        navigationOptions: {
            title: 'liste des pays'
        }
    },
    Ecole: {
        screen: Ecole,
    }, 
    FiliereDispo: {
        screen: FiliereDispo,
    },
    Filter: {
        screen: Filter,
    }

})



export default createAppContainer(AppStackNavigator)