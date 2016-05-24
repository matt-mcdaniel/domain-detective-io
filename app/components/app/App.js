import React from 'react';
import {domains} from './../../../data/domains.json!json';

class App extends React.Component {
    render() {
        console.log(domains);
        return (
            <div className="domain-container">
                {domains.map((d, i) => <div className="domain" key={i}>{d[0]}</div> )}
            </div>
        )
    }
}

export default App;