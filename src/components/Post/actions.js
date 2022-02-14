import {LOAD_POSTS, POST_CREATE} from "./types";
// import {hideSpinner, showSpinner, toggleSpinner} from "../../actions";
import {hideAlert, showSuccess, toggleSpinner} from "../../actions";

/**
 *
 * @param post
 * @returns {{type: string, payload: *}}
 */
export function createPost(post) {
    // return {
    //     type: POST_CREATE,
    //     payload: post
    // }
    return dispatch => {
        dispatch(showSuccess('Пост был удачно создан'));
        dispatch({
            type: POST_CREATE,
            payload: post
        });
        setTimeout(() => {
            dispatch(hideAlert())
        }, 10000)
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