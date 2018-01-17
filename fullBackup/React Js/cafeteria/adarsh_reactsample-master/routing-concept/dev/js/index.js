import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';

const logger = createLogger();
export const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

function loadUser() {
    return  fetch('http://localhost:3001/employeeList').then(
        data =>
            ({
                type: "LOAD",
                payload: data.json()
            }),

        error => console.log(error)
    );
}



store.dispatch(
    loadUser()
);
    
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
