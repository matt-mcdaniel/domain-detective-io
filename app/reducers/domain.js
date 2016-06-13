import data from '../../data/domains.json!json';

// Action Constants
const SEARCH = 'SEARCH';
const RECEIVE_DOMAINS = 'ALL';

const initialState = data.domains;

const popular = ['com', 'io', 'net', 'org'];

// Selector
// Prepare State for View
export default (state = initialState, action) => {
    switch (action.type) {
        case 'search':
            return initialState.filter((d) => {
                return d.name.match(action.text) || action.text.match(d.name)
            });
        default:
            return initialState;
    }
}


export const getVisibleDomains = (state, filter) => {
    switch (filter) {
        case 'all':
            return state.domains;
        case 'popular':
            return [
                ...state.domains
                    .filter((d) => popular.indexOf(d.name) > -1)
            ];
        case 'novelty':
            return [
                ...state.domains.filter((d) => popular.indexOf(d.name) === -1)
            ]
        default:
            return state.domains;
    }
}