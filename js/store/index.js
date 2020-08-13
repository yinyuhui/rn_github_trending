import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducer'

// 自定义中间件
const logger = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        console.log('action is a function')
    } else {
        console.log('action - ', action)
    }
    const result = next(action)
    console.log('nextState - ', store.getState())
    return result
}

const middleware = [logger, thunk]
export default createStore(reducers, applyMiddleware(...middleware))
