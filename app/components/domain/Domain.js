import React from 'react';
import fetch from 'isomorphic-fetch';

class Domain extends React.Component {
    constructor(){
        super();
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        console.log('click');
        
    }
   
    
    render() {
        let domain = this.props.domain;
        
        return (
            <div className="domain">
                <div >{domain[0]}</div>
                {domain[1] ? <div onClick={this.handleClick} className="domain-date">{domain[1]}</div> : '' }
            </div>
        );
    }
}

export default Domain;