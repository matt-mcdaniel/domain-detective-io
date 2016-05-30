import React from 'react';

class Search extends React.Component {
    constructor() {
        super();
        
        this.onSearch = this.onSearch.bind(this);
    }
    
    onSearch(e) {
        this.props.search(e.target.value);
    }
    
    render() {
        return (
            <input
                name="search"
                ref="search" 
                type="text" 
                className="filter__search"
                placeholder="Enter a domain"
                onChange={this.onSearch}
            />
        )
    }
}

export default Search;