import React from 'react';

class Domain extends React.Component {
    render() {
        const {domain} = this.props;
        
        const display = domain.domain.split('').indexOf('.') > -1 
            ? domain.domain 
            : '.' + domain.domain;
        
        let domainClass;
        if (domain.available === true) {
            domainClass = 'available';
        } else if (domain.available === false) {
            domainClass = 'unavailable';
        }
        
        return (
            <div className={'domain ' + domainClass} onClick={() => this.props.handleClick(domain)}>
                <div className={'availability ' + domainClass}>{domainClass ? domainClass : ''}</div>
                <div>{display}</div>
                {domain.date ? <div className="domain-date">{domain.date}</div> : '' }
            </div>
        );
    }
}

export default Domain;