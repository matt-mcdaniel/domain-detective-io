import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    
    increment(){
        this.props.dispatch({
            type: 'INCREMENT'
        });
    }
    
    decrement(){
        this.props.dispatch({
            type: 'DECREMENT'
        });
    }
    
    render() {
        return (
            <div>
                <ul>
                    <li>Server running Node/Express</li>
                    <li>React bootstrapped to page</li>
                    <li>BrowserSync injecting Sass updates</li>
                    <li>
                        <div>Redux managing state</div>
                        
                        <input 
                            onClick={this.increment} 
                            type="button" 
                            value="Increment"
                            />
                            
                        <input
                            onClick={this.decrement} 
                            type="button" 
                            value="Decrement"
                            />
                            
                        <pre>
                            {this.props.value}
                        </pre>
                    </li>
                </ul>
            </div>
        )
    }
}

export default App;