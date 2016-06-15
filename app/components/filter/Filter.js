import React from 'react';
import Search from '../search/Search';
import FilterOptions from '../filterOptions/FilterOptions';

class Filter extends React.Component {
    render() {
        return (
            <div className="filter__container">
                <Search />
                {/*<FilterOptions />*/}
            </div>
        );
    }
}


export default Filter;