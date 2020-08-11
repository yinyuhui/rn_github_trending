import React from 'react'
import DynamicTabNavigator from '../navigator/DynamicTabNavigator'
import NavigationUtil from '../navigator/NavigationUtil'

const Home = (props) => {
    // 避免每次都要传递 props 获取 navigation，至于从顶部导航跳到外部堆栈导航是直接可以执行的
    // 之前为了解决嵌套路由警告将 navigation 重置，因此可以直接跳转，
    // 当需要通过接口生成动态路由之后就不可以了，需要配置一下
    // 但是这样顶部导航无法相互跳转了
    NavigationUtil.navigation = props.navigation
    global.navigationUtil = NavigationUtil
    return <DynamicTabNavigator navigation={props.navigation} />
}
Home.router = DynamicTabNavigator.router

export default Home
