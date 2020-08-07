import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'

import Welcome from '../pages/Welcome'
import Popular from '../pages/Popular'
import Trending from '../pages/Trending'
import Favorite from '../pages/Favorite'
import My from '../pages/My'

const HomeBottomNavigator = createBottomTabNavigator({
    Popular: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: ({ tintColor, focused }) => (
                <MaterialCommunityIcons
                    name="fire"
                    size={20}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    Trending: {
        screen: Trending,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({ tintColor, focused }) => (
                <MaterialCommunityIcons
                    name="trending-up"
                    size={20}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    Favorite: {
        screen: Favorite,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({ tintColor, focused }) => (
                <MaterialCommunityIcons
                    name="heart"
                    size={20}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    My: {
        screen: My,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor, focused }) => (
                <Entypo name="user" size={20} style={{ color: tintColor }} />
            ),
        },
    },
})

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
        screen: HomeBottomNavigator,
        navigationOptions: {
            headerShown: false,
        },
    },
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
// export default createAppContainer(InitNavigator)
