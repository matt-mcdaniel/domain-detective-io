import React from 'react';
import SearchContainer from '../search/SearchContainer';
import FilterOptions from '../filterOptions/FilterOptions';

class Filter extends React.Component {
    render() {
        return (
            <div className="filter__container">
                <SearchContainer />
                {/*<FilterOptions />*/}
            </div>
        );
    }
}


export default Filter;