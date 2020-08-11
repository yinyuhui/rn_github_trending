/**
 * @format
 */
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import AppNavigator from './js/navigator/AppNavigator'
import navigationUtil from './js/navigator/NavigationUtil'

// global.navigationUtil = navigationUtil // 全局注册工具类
AppRegistry.registerComponent(appName, () => AppNavigator)
