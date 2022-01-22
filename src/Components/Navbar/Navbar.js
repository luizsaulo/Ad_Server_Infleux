import React from 'react';
import Logo from '../../assets/unfleux-logo.jpg';

function Navbar({ openModal }) {
    return (
        <nav>
            <div className='nav-container'>
                <img src={Logo} alt='Logo Infleux' />
                <button onClick={openModal}>Entrar</button>
            </div>
        </nav>
    )
}

export default Navbar