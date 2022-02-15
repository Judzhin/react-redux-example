import {put, call, takeEvery} from 'redux-saga/effects';
import {LOAD_POSTS, REQUEST_POSTS} from "./types";
import {hideSpinner, showSpinner} from "../../actions";

/**
 *
 * @returns {Promise<any>}
 */
async function requestPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    return await response.json();
}

/**
 *
 * @returns {IterableIterator<*>}
 */
function* sagaWorker() {
    yield put(showSpinner())
    const payload = yield call(requestPosts)
    yield put({type: LOAD_POSTS, payload})
    yield put(hideSpinner())
}

/**
 * Generator
 *
 * @returns {IterableIterator<*>}
 */
export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker);
}