import data from '../../../data/domains.json!json';

const SEARCH = 'SEARCH';

const initialState = {
    search: '',
    recent: data.domains[0],
    all: data.domains[1]
};

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