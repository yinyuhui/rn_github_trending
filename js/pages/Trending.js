import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Trending = (props) => {
    const {
        navigation: { setParams },
    } = props
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Trending</Text>
            <Button
                title="修改主题色"
                onPress={() => {
                    setParams({ tintColor: 'red' })
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
