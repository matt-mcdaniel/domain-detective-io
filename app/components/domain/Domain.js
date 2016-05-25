import React from 'react';

class Domain extends React.Component {
    render() {
        let domain = this.props.domain;
        return (
            <div className="domain">
                <div >{domain[0]}</div>
                {domain[1] ? <div className="domain-date">{domain[1]}</div> : '' }
            </div>
        );
    }
}

export default Domain;