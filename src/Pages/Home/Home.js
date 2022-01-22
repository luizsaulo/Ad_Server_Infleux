import React from 'react';
import Logo from '../../assets/unfleux-logo.jpg';
import Navbar from '../../Components/Navbar/Navbar';
import Card from '../../Components/Card/Card';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Navbar />
            <section className='input-section'>
                <form>
                    <h2>Pesquisar por campanha</h2>
                    <div className='form-inputs'>
                        <input type='text' placeholder='pesquisar por camapanha' />
                        <input type='number' min='0' placeholder='preço máximo' />
                    </div>
                </form>
            </section>
            <section className='products-section'>
                <section className='products-container'>                    
                    <Card />
                    <Card />                   
                </section>
            </section>
            <div className='backdrop'>
                <div className='modal'>
                    <h1>Entrar</h1>
                    <form action=''>
                        <input type='text' placeholder='email' />
                        <input type='text' placeholder='senha' />
                        <button>Entrar</button>
                        <Link>Criar Conta</Link>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default Home