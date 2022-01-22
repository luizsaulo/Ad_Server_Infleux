import React from 'react';
import { Link } from 'react-router-dom'

function RegisterModal({ setLoginForm }) {
    return(
        <div className='modal'>
                    <h1>Cadastrar</h1>
                    <form action=''>
                        <input type='text' placeholder='nome' />
                        <input type='text' placeholder='whatsapp' />
                        <input type='text' placeholder='email' />
                        <input type='text' placeholder='senha' />
                        <button>Cadastrar</button>
                        <Link onClick={setLoginForm}>Já possuo Conta</Link>
                    </form>
        </div>
    )
}

export default RegisterModal