import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import actions from '../action'

const Trending = (props) => {
    const dispatch = useDispatch()
    const {
        navigation: { setParams },
    } = props
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Trending</Text>
            <Button
                title="修改主题色"
                onPress={() => {
                    dispatch(actions.onThemeChange('red'))
                }}
            />
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
