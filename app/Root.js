import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import createLogger from 'redux-logger';
import Container from './components/container/Container';

const loggerMiddleware = createLogger();

export const store = createStore(
	reducers,
	applyMiddleware(
		thunk,
		loggerMiddleware
	)
);

export class Root extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        )
    }
}
