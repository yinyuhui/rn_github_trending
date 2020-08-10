import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Welcome = (props) => {
    useEffect(() => {
        let timer = setTimeout(() => {
            // 跳转到首页
            global.navigationUtil.resetToHome(props)
        }, 2000)
        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text>welcome</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Welcome
