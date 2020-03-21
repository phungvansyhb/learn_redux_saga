import * as uitype from '../Contant/TYPE/UI'
const initialState = {
    showLoading : false
}

export default (state = initialState, { type }) => {
    switch (type) {

    case uitype.SHOW_LOADING:
        return { ...state, showLoading : true }
    case uitype.HIDE_LOADING:
        return { ...state, showLoading : false }

    default:
        return state
    }
}
