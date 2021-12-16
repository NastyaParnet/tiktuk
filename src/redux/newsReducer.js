import { FETCH_NEWS, HIDE_LOADER, SHOW_LOADER } from "./types"

const initialState = {
    loading: false,
    isPlayNow: false,
    news: []
}

export const newsReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case FETCH_NEWS:
            return {...state, news: action.payload}
        default:
            return state
    }
}