import {combineReducers} from "redux";
import {postsReducer} from "./components/Post/postsReducer";
import {HIDE_SPINNER, SHOW_SPINNER, TOGGLE_SPINNER} from "./types";

const initialState = {
    loader: false,
};

/**
 *
 * @param state
 * @param action
 * @returns {{syncPosts: Array, asyncPosts: Array}}
 */
const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_SPINNER:
            return {...state, loader: true};
        case HIDE_SPINNER:
            return {...state, loader: false};
        case TOGGLE_SPINNER:
            return {...state, loader: !!!state.loader};
        default:return state;
    }
};

export const rootReducer = combineReducers({
    app: appReducer,
    posts: postsReducer
})