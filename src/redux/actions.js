import PostService from "../API/PostService"
import { FETCH_NEWS, HIDE_LOADER, PLAY_NOW_FALSE, PLAY_NOW_TRUE, SHOW_LOADER } from "./types"

export function showLoader(){
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader(){
    return {
        type: HIDE_LOADER
    }
}

export function isPlayNowTrue(){
    return {
        type: PLAY_NOW_TRUE
    }
}

export function isPlayNowFalse(){
    return {
        type: PLAY_NOW_FALSE
    }
}

export function getNews(){
    return async dispatch => {
        dispatch(showLoader())
        const payload = await PostService.getNews()
        dispatch({type: FETCH_NEWS, payload})
        dispatch(hideLoader())
    }
}