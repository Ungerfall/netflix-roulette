import React from 'react';
import { Footer as FooterLayout } from './Footer.style';

const Footer: React.FC = () => {
    return (
        <FooterLayout>
            <span className="bold netflix-color">netflix</span>
            <span className="netflix-color">roulette</span>
        </FooterLayout>
    );
};

export default Footer;