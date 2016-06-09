import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import FilterableContainer from './components/filterable/FilterableContainer';
import reducers from './reducers/root';

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
                <FilterableContainer />
            </Provider>
        )
    }
}
