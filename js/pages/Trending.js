import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import actions from '../action'
import { clearAll } from '../utils/dao/DataStore'
const Trending = (props) => {
    const dispatch = useDispatch()
    const {
        navigation: { setParams },
    } = props

    const [showData, setShowData] = useState('showData')

    const getData = async () => {
        const url =
            'https://api.github.com/search/repositories?q=vue&sort=stars'
        const result = await global.$get(url)
        setShowData(JSON.stringify(result))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Trending</Text>
            <Button
                title="修改主题色"
                onPress={() => {
                    dispatch(actions.onThemeChange('red'))
                }}
            />
            <Button title="获取数据" onPress={getData} />
            <Button title="清空" onPress={clearAll} />
            <Text>{showData}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
    },
})
export default Trending
