import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <>
                <header id="header">
                    <span className="netflix netflix-color">netflix</span>
                    <span className="netflix-color">roulette</span>
                </header>
            </>
        );
    }
}

export default Header;