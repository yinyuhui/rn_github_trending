import React from 'react'
import { useSelector } from 'react-redux'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'

import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import Popular from '../pages/Popular'
import Trending from '../pages/Trending'
import Favorite from '../pages/Favorite'
import My from '../pages/My'

// 配置路由信息，这样就可以动态地设置展示的路由，或者根据服务端返回的内容确定展示的路由
const TABS = {
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
    // others
}

const tabBarComponent = (props) => {
    const themeState = useSelector((state) => state.theme)
    return <BottomTabBar {...props} activeTintColor={themeState.theme} />
}

const DynamicNavigator = (props) => {
    // 从预设导航中选出要渲染的
    // const { Popular, Trending, Favorite, My } = TABS
    // 把要渲染的组装成新的对象，用作 createBottomTabNavigator 的第一个参数
    // const tabs = { Popular, Trending, Favorite, My }

    // 可以把创建的导航存起来 避免重复渲染导致的性能消耗
    return createBottomTabNavigator(TABS, {
        tabBarComponent,
    })
}

export default DynamicNavigator()
