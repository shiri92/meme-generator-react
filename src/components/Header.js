import React from 'react';

import TrollFace from '../assets/img/TrollFace.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content container py-4 d-flex align-items-center">
                <img className="mx-5" src={TrollFace} alt="problem" />
                <p className="text-center">Meme Generator</p>
            </div>
        </header>
    );
}

export default Header;
