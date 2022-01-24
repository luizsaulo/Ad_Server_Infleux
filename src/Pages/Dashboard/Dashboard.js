import React, { useState, useContext, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import DeletableCard from '../../Components/DeletableCard/DeletableCard';
import api from '../../Services/Api';
import { UserContext } from '../../Context/UserContext'

function Dashboard() {
    const [prouctData, setUserData] = useContext(UserContext)
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [productsData, setProductsData] = useState([])

    useEffect(()=>{
       getUsersProducts()
    }, [productsData])

    async function newProductHandler(e) {
        e.preventDefault()
        try {
            await api.post(`${userData._id}/product`, {
                name: productName,
                price: productPrice
            }, {
                headers: {
                    auth: userData._id
                }
            })
            alert('Item cadastrado com sucesso!')
            setProductName('')
            setProductPrice('')
        } catch(err) {
            alert('Falha ao adicionar item, tente novamente')
        }
    }

    async function getUsersProducts() {
        try {
            const userProductsData = await api.get(`/product/${userData._id}`, {
                headers: {
                    auth: userData._id
            }
            })
            const { data } = userProductsData
            setProductsData(data)
        } catch(err) {
            alert('Erro ao carregar produtos')
        }        
    }

    async function deleteProductHandler(product_id) {
        try {
            await api.delete(`/${userData.id}/product/${product_id}`, {
                headers: {
                    auth: userData._id
                }
            })
            alert('Produto removido com sucesso!')
        } catch(err) {
            alert('Erro ao excluir produto')
        }
    }

    return(
        <div>
            <Navbar />
            <section className='input-section'>
                <form>
                    <h1>Incluir campanha</h1>
                    <div className='campaign-inputs'>
                        <input 
                            type='text' 
                            placeholder='tema da campanha' 
                            value={productName}
                            onChange={e=>setProductName(e.target.value)}
                        />
                        <input 
                            type='number' 
                            min='0' 
                            placeholder='preço da campanha' 
                            value={productPrice}
                            onChange={e=>setProductPrice(e.target.value)}
                        />
                        <button className='campaign-btn' onClick={newProductHandler}>Adicionar Campanha</button>
                    </div>
                </form>
            </section>
            <section className='products-section'>
                <section className='products-container'>  
                    {productsData.map(product => (
                        <DeletableCard key={product._id}
                            name={product.name}
                            price={product.price}
                            userName={product.user.name}
                            userWhats={product.user.whatsapp}
                            deleteProductHandler={()=>{deleteProductHandler(product._id)}}
                        />
                    ))}                  
                                                     
                </section>
            </section>
        </div>
        
    )
}

export default Dashboard