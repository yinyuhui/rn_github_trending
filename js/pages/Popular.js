import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Popular = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Popular</Text>
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
export default Popular
