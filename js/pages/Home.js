import React from 'react'
import DynamicTabNavigator from '../navigator/DynamicTabNavigator'

const Home = (props) => {
    // 避免每次都要传递 props 获取 navigation，至于从顶部导航跳到外部堆栈导航是直接可以执行的
    global.navigationUtil.navigation = props.navigation
    return <DynamicTabNavigator navigation={props.navigation} />
}
Home.router = DynamicTabNavigator.router

export default Home
