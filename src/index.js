import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from 'redux';
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import dynostore, { dynamicReducers } from '@redux-dynostore/core';
import { applyMiddleware } from 'redux-subspace';
import createSagaMiddleware from 'redux-subspace-saga';
import { dynamicSagas } from '@redux-dynostore/redux-saga';
import {appState} from './widgets/widgets-redux/widgets-reducer';
import {widgetSaga} from './widgets/widgets-redux/widgets-saga';
import {widgetMiddleware} from './widgets/widgets-redux/widgets-middleware';
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({ collapsed: true, diff: true });
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({appState});
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware,loggerMiddleware,widgetMiddleware),dynostore(dynamicReducers(),dynamicSagas(sagaMiddleware))))
sagaMiddleware.run(widgetSaga);
ReactDOM.render(
    <Provider store={store}>
        <App />
        </Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
