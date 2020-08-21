import Types from './types'
import get from '../utils/dao/DataStore'

export function onPopularRefresh(url, storeName) {
    return (dispatch) => {
        dispatch({ type: Types.POPULAR_REFRESH })
        get(url)
            .then((res) => {
                dispatch({
                    type: Types.POPULAR_REFRESH_SUCCESS,
                    storeName,
                    data: res.items,
                })
            })
            .catch((e) => {
                dispatch({ type: Types.POPULAR_REFRESH_FAIL, storeName, e })
            })
    }
}
