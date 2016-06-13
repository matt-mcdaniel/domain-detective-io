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
        console.log('click%s', 'color:blue');
        //this.props.getAvailability(this.props.search + '.' + args[0]);
    }
    
    onCheckbox(obj) {
        this.props.onCheckbox(obj);
    }
    
    componentWillMount(){
        //console.log('props:', this.props);
        //this.props.receiveDomains;
    }
    
    render() {
        
        const { popular, novelty } = this.props;
        
        return (
            <div>
                <Header />
                <div className="domain-filter-container">
                    <Filter
                        onCheckbox={this.onCheckbox} 
                        onSearch={this.onSearch} 
                    />
                </div>
                <h3 className="domain-section-title">Popular</h3>
                <div className="domain-container">
                    {popular.map((d, i) => 
                        <Domain
                            search={this.props.search}
                            handleClick={this.handleClick} 
                            key={i} 
                            domain={d} 
                        />
                    )}
                </div>
                <h3 className="domain-section-title">Novelty</h3>
                <div className="domain-container">
                    {novelty.map((d, i) => 
                        <Domain
                            search={this.props.search}
                            handleClick={this.handleClick} 
                            key={i} 
                            domain={d} 
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Filterable;