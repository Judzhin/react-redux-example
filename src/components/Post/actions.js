import {LOAD_POSTS, POST_CREATE} from "./types";
// import {hideSpinner, showSpinner, toggleSpinner} from "../../actions";
import {toggleSpinner} from "../../actions";

/**
 *
 * @param post
 * @returns {{type: string, payload: *}}
 */
export function createPost(post) {
    return {
        type: POST_CREATE,
        payload: post
    }
}

/**
 *
 * @returns {{type: string}}
 */
export function loadPosts() {
    // return {
    //     type: LOAD_POSTS
    // }

    return async dispatch => {
        // dispatch(toggleSpinner());
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        // const data = await response.json();
        // dispatch({type: LOAD_POSTS, payload: data})
        // dispatch(toggleSpinner());

        // fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        // .then(response => response.json())
        // .then(data => dispatch({type: LOAD_POSTS, payload: data}))

        // dispatch(showSpinner());
        dispatch(toggleSpinner());

        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(response => response.json())
        .then(data => {
            // dispatch(hideSpinner());
            dispatch(toggleSpinner());
            dispatch({type: LOAD_POSTS, payload: data});
        })
    }
}