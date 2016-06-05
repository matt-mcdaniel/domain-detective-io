import React from 'react';

class FilterOptions extends React.Component {
    constructor() {
        super();
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange() {
        console.log(this.refs['top-level-only'].checked);
    }
    
    render() {
        return (
            <div className="filter-options-container">
                <label className="filter-options-label" for="top-level-only" name="top-level-only">Top Level Domains Only</label>
                <input 
                    ref="top-level-only" 
                    className="filter-options-input"
                    type="checkbox" 
                    onChange={() => this.handleChange()}
                />
                <label className="filter-options-label" for="top-level-only" name="top-level-only">Top Level Domains Only</label>
                <input 
                    className="filter-options-input"
                    ref="top-level-only" 
                    type="checkbox" 
                    onChange={() => this.handleChange()}
                />
            </div>
        )
    }
}

export default FilterOptions;