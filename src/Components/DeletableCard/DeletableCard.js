import React from 'react';


function DeletableCard({ name, price, userName, userWhats }) {
    
    return (
        <div className='card'>
            <button>Excluir</button>          
            <h2>{ name }</h2>
            <h1>R$ { price }</h1>
            <div className='card-info'>
                <div className='card-name'>
                    <img src='' alt='' />
                    <p>{ userName }</p>
                </div>
                <img src='' alt='' />
                <p>{ userWhats }</p>
            </div>
        </div>
    )
}

export default DeletableCard