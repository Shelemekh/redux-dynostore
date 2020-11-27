import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import dynostore, { dynamicReducers } from '@redux-dynostore/core';
import { applyMiddleware } from 'redux-subspace';
import createSagaMiddleware from 'redux-subspace-saga';
import { dynamicSagas } from '@redux-dynostore/redux-saga';
import HackerNews from "./widgets/hacker-news";
import Weather from './widgets/weather';
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({ collapsed: true, diff: true });
const sagaMiddleware = createSagaMiddleware();
const reducer = (state = {}) => state;
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware,loggerMiddleware),dynostore(dynamicReducers(),dynamicSagas(sagaMiddleware))))

ReactDOM.render(
    <Provider store={store}>
        <App />
        </Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
