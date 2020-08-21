import React, { useState, useEffect } from 'react'
import {
    View,
    SafeAreaView,
    StyleSheet,
    LogBox,
    RefreshControl,
} from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { useSelector, useDispatch } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import action from '../action'
import PopularItem from '../components/PopularItem'

const PopularTab = (props) => {
    const storeName = props.tabLabel

    const dispatch = useDispatch()
    const popularState = useSelector((state) => state.popular)
    const themeState = useSelector((state) => state.theme)

    const url = `https://api.github.com/search/repositories?q=${storeName}&sort=stars`

    const getData = () => {
        dispatch(action.onPopularRefresh(url, storeName))
    }

    useEffect(() => {
        getData()
    }, [])

    const showList = popularState[storeName] || { items: [], isLoading: false }
    return (
        <View style={{ paddingTop: 4 }}>
            <FlatList
                data={showList.items}
                renderItem={(item) => <PopularItem item={item.item} />}
                keyExtractor={(item) => `${item.id}`}
                refreshControl={
                    <RefreshControl
                        title="loading..."
                        titleColor={themeState.theme}
                        tintColor={themeState.theme}
                        colors={[themeState.theme]}
                        onRefresh={getData}
                        refreshing={showList.isLoading}
                    />
                }
                // 距离底部的距离
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    // 设置定时器保证会在滚动之后执行
                    setTimeout(() => {
                        // 默认会执行2次，为了解决此问题设置标志位
                        // if (canLoadMore) {
                        //     canLoadMore = false
                        //     // loadMore
                        // }
                    })
                }}
                onMomentumScrollBegin={() => {
                    // 刚刚开始滑动时触发
                    // canLoadMore = true
                }}
            />
        </View>
    )
}

const getPopularTabs = (tabs) => {
    const themeState = useSelector((state) => state.theme)

    let topTabs = Object.create(null)
    tabs.forEach((item) => {
        topTabs[item] = {
            screen: (props) => <PopularTab {...props} tabLabel={item} />,
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
                style: {
                    minWidth: 100,
                    backgroundColor: themeState.theme,
                },
                indicatorStyle: { height: 2, backgroundColor: '#fff' },
                labelStyle: {
                    fontSize: 14,
                },
            },
        })
    )
}

const Popular = (props) => {
    const themeState = useSelector((state) => state.theme)
    LogBox.ignoreAllLogs()
    // FIXME: 动态 tab，但 PopularTabs 只能在 Popular 外部定义，如何根据后端返回动态加载
    TABS = ['JS', 'Vue', 'React', 'react native', 'Android', 'IOS']
    const [tabs, setTabs] = useState(['JS'])

    useEffect(() => {
        setTabs(TABS)
    }, [])

    const PopularTabs = getPopularTabs(tabs)

    return (
        <SafeAreaView style={styles.safeContainer}>
            {PopularTabs ? <PopularTabs /> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#f5fcff',
        // backgroundColor: 'red',
    },
    flatItem: {
        backgroundColor: '#476287',
        marginBottom: 8,
    },
})
export default Popular
