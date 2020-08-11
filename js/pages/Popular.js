import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'

const PopularTab = (props) => (
    <View>
        <Text>PopularTab</Text>
        <Text
            onPress={() => {
                global.navigationUtil.goPage('Test', props)
            }}>
            goTest
        </Text>
        <Text
            onPress={() => {
                global.navigationUtil.goPage('IOS')
            }}>
            IOS
        </Text>
    </View>
)

const getPopularTabs = (tabs) => {
    let topTabs = Object.create(null)
    tabs.forEach((item) => {
        topTabs[item] = {
            screen: (props) => <PopularTab {...props} />,
            navigationOptions: {
                tabBarLabel: item,
            },
        }
    })
    return createAppContainer(
        createMaterialTopTabNavigator(topTabs, {
            tabBarOptions: {
                upperCaseLabel: false,
                scrollEnabled: true,
                style: { minWidth: 100, backgroundColor: '#776297' },
                indicatorStyle: { height: 2, backgroundColor: '#fff' },
                labelStyle: {
                    fontSize: 14,
                },
            },
        })
    )
}

const Popular = (props) => {
    console.disableYellowBox = true
    // FIXME: 动态 tab，但 PopularTabs 只能在 Popular 外部定义，如何根据后端返回动态加载
    TABS = ['JS', 'Vue', 'React', 'react native', 'Android', 'IOS']
    const [tabs, setTabs] = useState(['JS'])
    useEffect(() => {
        setTimeout(() => {
            setTabs(TABS)
        }, 300)
    }, [])

    const PopularTabs = getPopularTabs(tabs)

    return (
        <View style={styles.container}>
            {PopularTabs ? <PopularTabs /> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#f5fcff',
        marginTop: 30,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
    },
})
export default Popular
