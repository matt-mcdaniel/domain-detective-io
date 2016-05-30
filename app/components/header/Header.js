import React from 'react';
import Logo from '../logo/Logo';

class Header extends React.Component {
    
    render(){
        return (
            <header className="header">
                <Logo />
                <div className="title">
                    Domain Detective
                </div>
            </header>
        )
    }
    
}

export default Header;