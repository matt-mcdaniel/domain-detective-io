// Actions
const SEARCH = 'SEARCH';
const RECEIVE_DOMAINS = 'RECEIVE_DOMAINS';

export default (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_DOMAINS:
            return action.domains;
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