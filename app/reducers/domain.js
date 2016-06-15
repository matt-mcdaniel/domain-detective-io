import popular from '../config/popularDomains';

// Reducer
export default (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_POPULAR':
            return [
                ...action.domains,
                ...state.slice(4)
            ];
        default:
            return state;
    }
}

// Selector
// Prepare State for View
export const getVisibleDomains = (state, filter) => {
    switch (filter) {
        case 'all':
            return state;
        case 'popular':
            return [
                ...state.slice(0, popular.length)
            ];
        case 'novelty':
            return [
                ...state.slice(popular.length)
            ]
        default:
            return state;
    }
}