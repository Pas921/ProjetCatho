import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import ListePays from '../Components/ListePays'
import ListeEcole from '../Components/ListeEcoles'
import Ecole from '../Components/Ecole'
import FiliereDispo from '../Components/FiliereDispo'


const AppStackNavigator = createStackNavigator({

    ListePays: {
        screen: ListePays,
        navigationOptions: {
            title: 'liste des pays'
        }
    },
    ListeEcole: {
        screen: ListeEcole,
    },

    Ecole: {
        screen: Ecole,
    }, 
    FiliereDispo: {
        screen: FiliereDispo,
    }

})



export default createAppContainer(AppStackNavigator)