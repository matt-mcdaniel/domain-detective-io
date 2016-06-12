import data from '../../data/domains.json!json';
import 'whatwg-fetch';

const request = new Request('/api', {
    method: "POST",
    headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }),
    mode: 'cors'
});

// Initialize with Data
export const receiveDomains = () => {
    dispatch({
        type: 'RECEIVE_DOMAINS',
        domains: data.domains
    });
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