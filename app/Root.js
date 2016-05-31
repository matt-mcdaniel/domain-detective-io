import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import FilterableContainer from './components/filterable/FilterableContainer';
import {combineReducers} from 'redux';

// Reducers
import {domains} from './components/filterable/FilterableReducer';

const loggerMiddleware = createLogger();

// const reducers = combineReducers({
//     domains,
//     search
// });

export const store = createStore(
    domains,
	applyMiddleware(
		thunk,
		//loggerMiddleware
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
