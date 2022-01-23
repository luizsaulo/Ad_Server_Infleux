import React, { useContext } from 'react';
import Logo from '../../assets/unfleux-logo.jpg';
import { UserContext } from '../../Context/UserContext';

function Navbar({ openModal }) {
    const [userData, setUserData] = useContext(UserContext)

    async function logoutHandler(e) {
        e.preventDefault()

        setUserData(prevState => ({
            ...prevState,
            isLogged: false,
            email: '',
            name: '',
        }))
    }

    return (
        <nav>
            <div className='nav-container'>
                <img src={Logo} alt='Logo Infleux' />
                {userData.isLogged ? <button onClick={logoutHandler}>Sair</button> : <button onClick={openModal}>Entrar</button>}
                
            </div>
        </nav>
    )
}

export default Navbar