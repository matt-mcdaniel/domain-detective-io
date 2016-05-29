import React from 'react';
import Logo from '../logo/Logo';

class Header extends React.Component {
    
    render(){
        return (
            <header className="header">
                <Logo />
                <div className="title">
                    Top Level Domain Inspector
                </div>
            </header>
        )
    }
    
}

export default Header;