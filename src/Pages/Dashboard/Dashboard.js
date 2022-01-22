import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import DeletableCard from '../../Components/DeletableCard/DeletableCard';

function Dashboard() {
    return(
        <div>
            <Navbar />
            <section className='input-section'>
                <form>
                    <h1>Incluir campanha</h1>
                    <div className='campaign-inputs'>
                        <input type='text' placeholder='tema da campanha' />
                        <input type='number' min='0' placeholder='preço da campanha' />
                        <button className='campaign-btn'>Adicionar Campanha</button>
                    </div>
                </form>
            </section>
            <section className='products-section'>
                <section className='products-container'>                    
                    <DeletableCard />
                    <DeletableCard />               
                </section>
            </section>
        </div>
        
    )
}

export default Dashboard