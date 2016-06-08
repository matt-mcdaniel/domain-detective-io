import React from 'react';

class Domain extends React.Component {
    render() {
        const {domain, search} = this.props;
        
        return (
            <div className="domain" onClick={() => this.props.handleClick(domain)}>
                <div>{search + '.' + domain[0].toLowerCase()}</div>
                {domain[1] ? <div className="domain-date">{domain[1]}</div> : '' }
            </div>
        );
    }
}

export default Domain;