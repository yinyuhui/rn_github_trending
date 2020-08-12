/**
 * @format
 */
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import AppNavigator from './js/navigator/AppNavigator'
import App from './js/App'

// global.navigationUtil = navigationUtil // 全局注册工具类
AppRegistry.registerComponent(appName, () => App)
