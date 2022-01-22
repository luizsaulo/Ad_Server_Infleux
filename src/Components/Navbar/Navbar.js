import React, { useContext } from 'react';
import Logo from '../../assets/unfleux-logo.jpg';
import { UserContext } from '../../Context/UserContext';

function Navbar({ openModal }) {
    const [userData, setUserData] = useContext(UserContext)

    return (
        <nav>
            <div className='nav-container'>
                <img src={Logo} alt='Logo Infleux' />
                {userData.isLogged ? <button>Sair</button> : <button onClick={openModal}>Entrar</button>}
                
            </div>
        </nav>
    )
}

export default Navbar