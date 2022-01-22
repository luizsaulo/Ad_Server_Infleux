import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Card from '../../Components/Card/Card';
import Modal from '../../Components/Modal/Modal';
import LoginModal from '../../Components/LoginModal/LoginModal';
import RegisterModal from '../../Components/RegisterModal/RegisterModal';

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
            <Modal />
        </div>


    )
}

export default Home