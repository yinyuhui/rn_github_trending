import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'

const PopularTab = () => (
    <View>
        <Text>PopularTab</Text>
    </View>
)

const PopularTabs = createAppContainer(
    createMaterialTopTabNavigator(
        {
            PopularTab1: {
                screen: PopularTab,
                navigationOptions: {
                    tabBarLabel: 'PopularTab1',
                },
            },
            PopularTab2: {
                screen: PopularTab,
                navigationOptions: {
                    title: 'PopularTab2',
                },
            },
        },
        {
            tabBarOptions: {
                upperCaseLabel: false,
            },
        }
    )
)

const Popular = (props) => {
    return (
        <View style={styles.container}>
            <PopularTabs navigation={props.navigation} />
        </View>
    )
}

Popular.router = PopularTabs.router

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
