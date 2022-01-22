import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Card from '../../Components/Card/Card';
import Modal from '../../Components/Modal/Modal';


function Home() {
    const [isModalOpen, setMdoalOpen] = useState(false)

    function openModal() {
        setMdoalOpen(true)
    }

    function closeModal() {
        setMdoalOpen(false)
    }

    return (
        <div>
            <Navbar openModal={openModal} />
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

            {isModalOpen ? <Modal closeModal={closeModal} /> : null}           
        </div>


    )
}

export default Home