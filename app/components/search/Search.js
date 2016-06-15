import React from 'react';
import {debounce} from 'lodash';
import {store} from '../../Root';
import {search} from '../../actions/domain';

class Search extends React.Component {
    constructor() {
        super();
        
        this.state = { query: '' };
        this.onChange = this.onChange.bind(this);
        this.searchDebounce = debounce(this.handleDebounce, 400);
    }
    
    handleDebounce() {
        store.dispatch(search(this.state.query));
    }
    
    onChange(e) {
        this.setState({ query: e.target.value });
        this.searchDebounce();
    }
    
    render() {
        return (
            <input
                name="search"
                ref="search" 
                type="text" 
                className="filter__search"
                placeholder="Enter a domain"
                onChange={this.onChange}
            />
        )
    }
}

export default Search;