import React from 'react';
import Logo from '../../assets/unfleux-logo.jpg';

function Navbar() {
    return (
        <nav>
            <div className='nav-container'>
                <img src={Logo} alt='Logo Infleux' />
                <button>Entrar</button>
            </div>
        </nav>
    )
}

export default Navbar