import React from 'react';
// import ReactDOM, {render} from 'react-dom';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {rootReducer} from "./rootReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import {forbiddenWordsMiddleware} from "./components/Post/middleware";


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const store = createStore(rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk, forbiddenWordsMiddleware)
));

// const app = (
//     <Provider store>
//         <React.StrictMode>
//             <App/>
//         </React.StrictMode>
//     </Provider>
// )

render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
