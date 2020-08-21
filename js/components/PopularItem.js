import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Favorite = () => {
    const themeState = useSelector((state) => state.theme)
    return (
        <TouchableOpacity onPress={() => {}} style={{ padding: 10 }}>
            <FontAwesome
                name="star-o"
                style={{ color: themeState.theme, fontSize: 16 }}
            />
        </TouchableOpacity>
    )
}

const PopularItem = (props) => {
    const { item, onSelected } = props
    if (!item || !item.owner) return null

    return (
        <TouchableOpacity onPress={onSelected}>
            <View style={styles.item}>
                <Text style={styles.title}>{item.full_name}</Text>
                <Text style={styles.desc}>{item.description}</Text>
                <View style={styles.row}>
                    <View style={styles.row}>
                        <Text style={styles.gray}>Author</Text>
                        <Image
                            borderRadius={2}
                            source={{
                                uri: item.owner.avatar_url,
                                height: 20,
                                width: 20,
                            }}
                        />
                    </View>
                    <Text style={styles.gray}>
                        start: {item.stargazers_count}
                    </Text>
                    <Favorite />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    row: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    item: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 8,
        marginVertical: 4,

        borderRadius: 4,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 2,
    },
    title: {
        color: '#333',
        fontSize: 16,
        lineHeight: 32,
    },
    desc: {
        color: '#757575',
        fontSize: 14,
        lineHeight: 28,
        marginTop: 4,
        // marginBottom: 8,
    },
    gray: {
        color: '#444',
        marginRight: 4,
    },
})
export default PopularItem
