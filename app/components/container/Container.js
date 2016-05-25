import React from 'react';
import Domain from '../domain/Domain';
import Filter from '../filter/Filter';
import data from './../../../data/domains.json!json';

class Container extends React.Component {
    render() {
        return (
            <span>
                <h1>New Top Level Domains</h1>
                <div className="domain-filter-container">
                    <Filter />
                </div>
                <div className="domain-container">
                    {data.domains.map((d,i) => <Domain key={i} domain={d} /> )}
                </div>
            </span>
        )
    }
}

export default Container;