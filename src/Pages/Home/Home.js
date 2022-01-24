import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Card from '../../Components/Card/Card';
import Modal from '../../Components/Modal/Modal';
import api from '../../Services/Api';


function Home() {
    const [isModalOpen, setMdoalOpen] = useState(false)
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [productsData, setProductsData] = useState([])
    const [productsByName, setProductsByName] = useState('')
    const [productsByMaxPrice, setProductsByMaxPrice] = useState(100000000)
    const [filteredProductsData, setFilteredProductsData] = useState([])

    useEffect(() => {
        getUserLocation()
    }, [])

    async function getUserLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords
            setLatitude(latitude)
            setLongitude(longitude)
        }, (err) => {
            console.log(err)
        }, { timeout: 10000 })
            
    }

    useEffect(() => {
        getNearByProducts()
    }, [latitude, longitude])

    async function getNearByProducts() {
        try {
            const nearByProducts = await api.get(`/product?latitude=${latitude}&longitude=${longitude}`)
            const { data } = nearByProducts
            setProductsData(data)
        } catch(err) {
            alert('Erro ao carregar os itens')
        }
    }

    useEffect(() => {
        getFilteredProducts()
    }, [productsData, productsByName, productsByMaxPrice])

    function getFilteredProducts() {
        const filteredProducts = productsData.filter(product => 
             (!productsByName || product.name.toLowerCase().includes(productsByName.toLowerCase()))  
             (!productsByMaxPrice || product.price <= productsByMaxPrice)
        )
        setFilteredProductsData(filteredProducts)
    }

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
                    <h1>Pesquisar por campanha</h1>
                    <div className='form-inputs'>
                        <input 
                            type='text' 
                            placeholder='pesquisar por camapanha' 
                            value={productsByName}
                            onChange={e => setProductsByName(e.target.value)}
                        />
                        <input 
                            type='number' 
                            min='0' 
                            placeholder='preço máximo' 
                            value={productsByMaxPrice}
                            onChange={e => setProductsByMaxPrice(e.target.value)}
                        />
                    </div>
                </form>
            </section>
            <section className='products-section'>
                <section className='products-container'> 
                    {filteredProductsData.map(product => (
                        <Card key={product._id}
                            name={product.name}
                            price={product.price}
                            userName={product.user.name}
                            userWhats={product.user.whatsapp}
                        />
                    ))}  
                </section>
            </section>

            {isModalOpen ? <Modal closeModal={closeModal} /> : null}           
        </div>


    )
}

export default Home