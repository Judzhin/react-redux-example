import {HIDE_SPINNER, SHOW_SPINNER, TOGGLE_SPINNER} from "./types";

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