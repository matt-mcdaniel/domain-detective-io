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
    
    handleClick(...args){
        const domain = args[0];
        this.props.getAvailability('test.' + domain[0]);
    }
    
    onCheckbox(obj) {
        this.props.onCheckbox(obj);
    }
    
    render() {
        
        const premium = ['com', 'net', 'org', 'io'].map((d) => [d.toUpperCase()]);
        
        const { all } = this.props;
        
        const recent = all.filter((d) => d.length > 1);
        const novelty = all.filter((d) => premium.indexOf(d) === -1 && d.length === 1);
        
        return (
            <div>
                <Header />
                <div className="domain-filter-container">
                    <Filter
                        onCheckbox={this.onCheckbox} 
                        onSearch={this.onSearch} 
                    />
                </div>
                <div className="domain-container">
                    <h1 className="domain-subheading">Premium</h1>
                    <div className="domain-container-premium">
                        {premium.length === 0 ? <div>No Results</div> : 
                        premium.map((d, i) => {
                            return (
                                <Domain 
                                    search={this.props.search}
                                    handleClick={this.handleClick} 
                                    key={i} 
                                    domain={d} 
                                />
                            )
                        })}
                    </div>
                    <h1 className="domain-subheading">Recent</h1>
                    <div className="domain-container-recent">
                        {recent.length === 0 ? <div>No Results</div> : 
                        recent.map((d, i) => {
                            return (
                                <Domain
                                    search={this.props.search}
                                    handleClick={this.handleClick} 
                                    key={i} 
                                    domain={d} 
                                />
                            )
                        })}
                    </div>
                    <h1 className="domain-subheading">Novelty</h1>
                    <div className="domain-container-novelty">
                        {novelty.length === 0 ? <div>No Results</div> : 
                        novelty.map((d, i) => {
                            return (
                                <Domain 
                                    search={this.props.search}
                                    handleClick={this.handleClick} 
                                    key={i} 
                                    domain={d} 
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Filterable;