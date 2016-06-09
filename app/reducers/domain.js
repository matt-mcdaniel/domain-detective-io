import data from '../../data/domains.json!json';

// Actions
const SEARCH = 'SEARCH';

// Initial State
const initialState = data.domains[0].concat(data.domains[1]);

export default (state = initialState, action) => {
    switch(action.type) {
        case SEARCH:
        default:
            return state; 
    }
}

export const getVisibleDomains = ({ domains }, filter = 'all') => {
    switch (filter) {
        case 'all':
            return domains;
        default:
            throw new Error(`Unknown filter: ${filter}`);
    }
}