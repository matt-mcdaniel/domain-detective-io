import React from 'react';

class Domain extends React.Component {
    render() {
        const {domain} = this.props;
        
        return (
            <div className="domain" onClick={() => this.props.handleClick(domain)}>
                <div>{'.' + domain.name}</div>
                {domain.date ? <div className="domain-date">{domain.date}</div> : '' }
            </div>
        );
    }
}

export default Domain;