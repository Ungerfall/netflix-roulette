import React from 'react';
import { Header as HeaderLayout } from './Header.style';

const Header: React.FC = () => {
    return (
        <HeaderLayout>
            <span className="bold netflix-color">netflix</span>
            <span className="netflix-color">roulette</span>
        </HeaderLayout>
    );
};

export default Header;