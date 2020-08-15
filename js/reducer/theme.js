import Types from '../action/types'

const initState = {
    theme: '#dc7275',
}

export default function (state = initState, action) {
    switch (action.type) {
        case Types.THEME_CHANGE:
            return {
                ...state,
                theme: action.theme,
            }

        default:
            return state
    }
}
