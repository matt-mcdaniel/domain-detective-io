import {combineReducers} from 'redux';

function counter(state = {
    value: 0
}, action) {
    switch(action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, {
                value: ++state.value
            });
        case 'DECREMENT':
            return Object.assign({}, state, {
                value: --state.value
            });
        default:
            return state;
    }
}

export default combineReducers({
    counter
});