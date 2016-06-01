import React from 'react';
import Header from '../header/Header';
import Domain from '../domain/Domain';
import Filter from '../filter/Filter';
import fetch from 'isomorphic-fetch';


class Filterable extends React.Component {
    constructor() {
        super();
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e){
        this.props.getAvailability('test.ott');
    }
    
    render() {
        return (
            <div>
                <Header />
                <div className="domain-filter-container">
                    <Filter onSearch={this.onSearch} />
                </div>
                <div className="domain-container">
                    <h1 className="domain-subheading">Recent</h1>
                    <div className="domain-container-recent">
                        {this.props.recent.length === 0 ? <div>No Results</div> : 
                        this.props.recent.map((d, i) => <Domain handleClick={this.handleClick} key={i} domain={d} />)}
                    </div>
                    <h1 className="domain-subheading">All</h1>
                    <div className="domain-container-all">
                        {this.props.all.length === 0 ? <div>No Results</div> : 
                        this.props.all.map((d, i) => <Domain key={i} domain={d} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Filterable;