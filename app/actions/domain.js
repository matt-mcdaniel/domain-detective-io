import popular from '../config/popularDomains';
import Promise from 'promise';
import 'whatwg-fetch';

function fetchAvailability(url) {
    
    const request = new Request('/api', {
        method: "POST",
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }),
        mode: 'cors',
        body: JSON.stringify({ domain: url })
    });
    
    return fetch(request)
        .then((res) => res.json())
        .then((text) => text)
        .catch((e) => {
            return console.warn('Could not load url: ', e);  
        });
}


export function search(str) {
    return (dispatch) => {
    
        const fullAddress = popular.map(p => str + '.' + p);
        
        Promise.all(fullAddress.map(fetchAvailability))
            .then((arr) => {
                dispatch({
                    type: 'UPDATE_POPULAR',
                    domains: arr
                })
            }); 
        }
}

// Action Creators
export function getAvailability(str) {
    
    request.body = JSON.stringify({
        domain: str
    });
    
    fetch(request)
        .then((res) => res.json());
    
    // return (dispatch) => {
    // }
}