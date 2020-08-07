import React from 'react'
import DynamicTabNavigator from '../navigator/DynamicTabNavigator'

const Home = (props) => {
    return <DynamicTabNavigator navigation={props.navigation} />
}
Home.router = DynamicTabNavigator.router

export default Home
