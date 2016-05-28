import React from 'react';

class Filter extends React.Component {
    render() {
        return (
            <div className="filter__container">
                <input
                    name="search"
                    ref="search" 
                    type="text" 
                    className="filter__search"
                    placeholder="Enter a domain, word..."
                />
            </div>
        );
    }
}


export default Filter;