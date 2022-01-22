import React from 'react';


function DeletableCard() {
    
    return (
        <div className='card'>
            <button>Excluir</button>          
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
    )
}

export default DeletableCard