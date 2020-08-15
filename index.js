/**
 * @format
 */
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import App from './js/App'
import get from './js/utils/dao/DataStore'

global.$get = get // 全局注册 get 方法
AppRegistry.registerComponent(appName, () => App)
