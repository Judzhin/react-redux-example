import {POST_CREATE} from "./types";
import {showWarning} from "../../actions";

const forbidden = ['fuck', 'php'];

export function forbiddenWordsMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === POST_CREATE) {
                const found = forbidden.filter(w => action.payload.title.includes(w));
                if (found.length) {
                    return dispatch(showWarning('Сообщение', 'Вы спамер. Мы вас не звали, идите домой.'))
                }
            }
            return next(action);
        }
    }
}