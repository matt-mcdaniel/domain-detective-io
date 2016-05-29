import React from 'react';
import Header from '../header/Header';
import Domain from '../domain/Domain';
import Filter from '../filter/Filter';
import data from './../../../data/domains.json!json';
import { store } from '../../Root';

console.log(store); 

class Container extends React.Component {
    constructor(){
        super();
        
        this.onSearch = this.onSearch.bind(this);
    }
    
    onSearch(e){
        console.log(e.target);
        // dispatch({
        //     type: 'SEARCH',
            
        // })
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
                        {data.domains[0].map((d,i) => <Domain key={i} domain={d} /> )}
                    </div>
                    <h1 className="domain-subheading">All</h1>
                    <div className="domain-container-all">
                        {data.domains[1].map((d, i) => <Domain key={i} domain={d} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;