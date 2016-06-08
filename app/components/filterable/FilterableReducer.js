import data from '../../../data/domains.json!json';
import 'whatwg-fetch';

// Actions
const SEARCH = 'SEARCH';

const request = new Request('/api', {
    method: "POST",
    headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }),
    mode: 'cors'
});

// Action Creators
export function getAvailability(str) {
    
    request.body = JSON.stringify({
        domain: str.toLowerCase()
    });
    
    console.log('request:', request);
    
    fetch(request)
        .then((res) => res.json());
    
    return (dispatch) => {
    }
}

// Initial State
const initialState = {
    search: '',
    topLevelOnly: false,
    all: data.domains[0].concat(data.domains[1]),
};

// Reducer
export const domains = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH:
            const search = action.text.toUpperCase();
            return {
                search: action.text,
                all: [...initialState.all.filter((d) => {
                    if (d[0].match(search)) {
                        return true;
                    } else if (search.match(d[0])) {
                        return true;
                    } else {
                        return false;
                    }
                })]
            }
        default:
            return state; 
    }
}