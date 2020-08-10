import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Welcome from '../pages/Welcome'
import Home from '../pages/Home'
import Test from '../pages/Test'

const InitNavigator = createStackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            headerShown: false,
        },
    },
})

const MainNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false,
        },
    },
    Test,
})

const SwitchNavigator = createSwitchNavigator(
    {
        Init: InitNavigator,
        Main: MainNavigator,
    },
    {
        navigationOptions: {
            headerShown: false,
        },
    }
)

export default createAppContainer(SwitchNavigator)
