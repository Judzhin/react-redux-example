/**
 *
 * @type {{syncPosts: Array, asyncPosts: Array}}
 */
import {LOAD_POSTS, POST_CREATE} from "./types";

const initialState = {
    syncPosts: [],
    asyncPosts: []
};

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export const postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case POST_CREATE:
            return {...state, syncPosts: state.syncPosts.concat(action.payload)};
        // return {...state, syncPosts: [...state.syncPosts, action.payload]};
        case LOAD_POSTS:
            return {...state, asyncPosts: action.payload};
        default:
            return state;
    }
};