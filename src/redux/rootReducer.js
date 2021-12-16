import { combineReducers } from "redux"
import { newsReducer } from "./newsReducer"
import { userInfoReducer } from "./userInfoReducer"
import { userPostsReducer } from "./userPostsReducer"

export const rootReducer = combineReducers({
    news: newsReducer,
    userInfo: userInfoReducer,
    userPosts: userPostsReducer
})