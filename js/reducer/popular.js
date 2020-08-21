// state 格式
// const state = {
//     java: {
//         items: [],
//         isLoading: false
//     }
// }
import Types from '../action/types'

export default (state, action) => {
    switch (action.type) {
        case Types.POPULAR_REFRESH:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    isLoading: true,
                },
            }
        case Types.POPULAR_REFRESH_SUCCESS:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    items: action.data,
                    isLoading: false,
                },
            }
        case Types.POPULAR_REFRESH_FAIL:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    isLoading: false,
                },
            }
        default:
            return {
                ...state,
            }
    }
}
