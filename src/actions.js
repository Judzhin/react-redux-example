import {APP_SHOW_ALERT, HIDE_SPINNER, SHOW_SPINNER, TOGGLE_SPINNER} from "./types";

/**
 *
 * @returns {{type: string, loader: boolean}}
 */
export function showSpinner() {
    return {
        type: SHOW_SPINNER,
        loader: true
    }
}

/**
 *
 * @returns {{type: string, loader: boolean}}
 */
export function hideSpinner() {
    return {
        type: HIDE_SPINNER,
        loader: false
    }
}

/**
 *
 * @returns {{type: string, loader: boolean}}
 */
export function toggleSpinner() {
    return {
        type: TOGGLE_SPINNER,
    }
}

/**
 *
 * @param payload
 * @returns {{type: string, payload: *}}
 */
function factoryAlert(payload) {
    return dispatch => {
        setTimeout(() => {
            dispatch(hideWarning());
        }, 1000 * 10);
        dispatch({
            type: APP_SHOW_ALERT,
            payload: payload
        });
    }
}

/**
 *
 * @param title
 * @param message
 * @returns {{type: string, payload: {title: *, message: *}}}
 */
export function showWarning(title, message) {
    return factoryAlert({
        severity: 'warning', title, message
    });
}

/**
 *
 * @param title
 * @param message
 * @returns {{type: string, payload: {title: *, message: *}}}
 */
export function hideWarning(title, message) {
    return factoryAlert(null);
}