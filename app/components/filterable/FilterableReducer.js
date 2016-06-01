import data from '../../../data/domains.json!json';
import fetch from 'isomorphic-fetch';

// Actions
const SEARCH = 'SEARCH';


// Action Creators
export function getAvailability(str) {
    
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    fetch('/api', {
            method: 'POST',
            headers: headers,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify({ domain: str.toLowerCase() })
        })
        .then((res) => {
            if (res.status > 400) {
                console.log('Server Error', res.status);
            }
            
            return res.json();
        })
        .then((json) => {
            console.log(json);
        });
    
    return (dispatch) => {
    }
}

// Initial State
const initialState = {
    search: '',
    recent: data.domains[0],
    all: data.domains[1]
};

// Reducer
export const domains = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH:
            return {
                search: action.text,
                recent: [...initialState.recent.filter((d) => {
                    return d[0].match(action.text.toUpperCase());
                })],
                all: [...initialState.all.filter((d) => {
                    return d[0].match(action.text.toUpperCase());
                })]
            }
        default:
            return state; 
    }
}