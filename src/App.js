// import { offline } from "@redux-offline/redux-offline";
// import offlineConfig from "@redux-offline/redux-offline/lib/defaults";
import React, { Component } from "react";
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
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        // define the initial state where none of the widgets are visible
        this.state = {
            hackerNews: false,
            weather: false,
        };

        /**
         * configure the store and load the thunk and saga extension
         * The extensions are optional and you can choose extension based on the middleware you use
         * You can also build your own extensions for any other middleware e.g. redux-observable
         */
       
    }
    
    render() {
       
        return (
            <div className="App">
                <h1>Widgets</h1>
                <div className="checkboxes">
                    <input
                        type="checkbox"
                        onChange={this.onHackerNewsToggled}
                    />
                    <label>Hacker News</label>
                    <input type="checkbox" onChange={this.onWeatherToggled} />
                    <label>Weather</label>
                </div>
                <div className="widgets">{this.renderContent()}</div>
            </div>
        );
    }

    onHackerNewsToggled = () => {
        this.setState({ hackerNews: !this.state.hackerNews });
    };
    onWeatherToggled = () => {
        this.setState({ weather: !this.state.weather });
    };

    renderContent = () => {
        const loggerMiddleware = createLogger({ collapsed: true, diff: true });
        const sagaMiddleware = createSagaMiddleware();
        const reducer = (state = {}) => state;
        const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware,loggerMiddleware),dynostore(dynamicReducers(),dynamicSagas(sagaMiddleware))))
        return (
            // Pass the configured store to redux Provider
            // and render the widgets based on the state
            <Provider store={store}>
                <>
                    {this.getHackerNews()}
                    {this.getWeather()}
                </>
            </Provider>
        );
    };

    _hackerNews = null;
    getHackerNews() {
        if (!this.state.hackerNews) {
            return null;
        }

        if (this._hackerNews) {
            return this._hackerNews;
        }      
        this._hackerNews = <HackerNews />;
        return this._hackerNews;
    }

    getWeather() {
        if (!this.state.weather) {
            return null;
        }
        if (this._weather) {
            return this._weather;
        }       
        this._weather = <Weather />;
        return this._weather;
    }
}

export default App;
