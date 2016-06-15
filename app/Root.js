import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import FilterableContainer from './components/filterable/FilterableContainer';
import domains from './reducers/domain';
import data from '../data/domains.json!json';

const initialState = data.domains;
const loggerMiddleware = createLogger();

export const store = createStore(
    domains,
    initialState,
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
