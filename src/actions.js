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
 * @returns {Function}
 */
export function hideAlert() {
    return factoryAlert(null, null);
}

/**
 *
 * @param payload
 * @param title
 * @returns {Function}
 */
function factoryAlert(payload, title = 'Информационное сообщение') {
    return dispatch => {
        setTimeout(() => {
            dispatch(hideAlert());
        }, 1000 * 10);

        if (payload) {
            payload = {...payload, title}
        }

        dispatch({
            type: APP_SHOW_ALERT,
            payload: payload
        });
    }
}

/**
 *
 * @param message
 * @param title
 * @returns {Function}
 */
export function showWarning(message, title) {
    return factoryAlert({
        severity: 'warning', message
    }, title);
}

/**
 *
 * @param message
 * @param title
 * @returns {Function}
 */
export function showInfo(message, title) {
    return factoryAlert({
        severity: 'info', message
    }, title);
}

/**
 *
 * @param message
 * @param title
 * @returns {Function}
 */
export function showSuccess(message, title) {
    return factoryAlert({
        severity: 'success', message
    }, title);
}