import React, { useRef } from 'react'

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
    console.log(props)
    // 这里不要用 useState，会死循环
    const theme = useRef({
        tintColor: '',
        updateTime: Date.now(),
    })

    // 先拿到当前激活的导航
    const {
        navigation: {
            state: { routes, index },
        },
    } = props

    // 再拿到这个激活的导航的 params
    const params = routes[index].params

    // 如果更新了，就把当前存的值更新
    if (params && params.tintColor) {
        theme.current = { tintColor: params.tintColor, updateTime: Date.now() }
    }

    // theme.tintColor 可能不存在，这时取默认的
    return (
        <BottomTabBar
            {...props}
            activeTintColor={theme.current.tintColor || props.activeTintColor}
        />
    )
}

const DynamicNavigator = () => {
    // 从预设导航中选出要渲染的
    // const { Popular, Trending, Favorite, My } = TABS
    // 把要渲染的组装成新的对象，用作 createBottomTabNavigator 的第一个参数
    // const tabs = { Popular, Trending, Favorite, My }
    return createBottomTabNavigator(TABS, {
        tabBarComponent,
    })
}

export default DynamicNavigator()
