import React from 'react';
import Logo from '../../assets/unfleux-logo.jpg';

function Home() {
    return (
        <div>
            <nav>
                <div className='nav-container'>
                    <img src={Logo} alt='Logo de Unfleux' />
                    <button>Entrar</button>
                </div>
            </nav>
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
                    <div className='card'>
                        <h2>Campanha de Natal</h2>
                        <h1>R$ 20.000,00</h1>
                        <div className='card-info'>
                            <div className='card-name'>
                                <img src='' alt='' />
                                <p>Bloguerio X</p>
                            </div>
                            <img src='' alt='' />
                            <p>+55 11 99999-9999</p>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>Dia das Mães</h2>
                        <h1>R$ 18.000,00</h1>
                        <div className='card-info'>
                            <div className='card-name'>
                                <img src='' alt='' />
                                <p>Bloguerio Y</p>
                            </div>
                            <img src='' alt='' />
                            <p>+55 11 99999-9999</p>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>Dia dos Pais</h2>
                        <h1>R$ 10.000,00</h1>
                        <div className='card-info'>
                            <div className='card-name'>
                                <img src='' alt='' />
                                <p>Bloguerio Z</p>
                            </div>
                            <img src='' alt='' />
                            <p>+55 11 99999-9999</p>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>Black Friday</h2>
                        <h1>R$ 22.000,00</h1>
                        <div className='card-info'>
                            <div className='card-name'>
                                <img src='' alt='' />
                                <p>Bloguerio J</p>
                            </div>
                            <img src='' alt='' />
                            <p>+55 11 99999-9999</p>
                        </div>
                    </div>
                </section>

            </section>
        </div>


    )
}

export default Home