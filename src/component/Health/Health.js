import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Topic from '../Topic/Topic';
import './Health.css'

const Health = () => {
    const [healthyLife, setHealthyLife] =useState([]);
    const [cart ,setCart] =useState ([])
    

    useEffect(() =>{
fetch('generated.json')
.then(res =>res.json())
.then(data=> setHealthyLife
    (data))
    } , [])

    const handleAddToCart =(healthy) =>{
        console.log(healthy);
        const newCart = [...cart, healthy]
        setCart(newCart);
      }

    return (
        <div className='information-container '>
            <div className="health-container">
                {
               healthyLife.map(healthy => <Topic 
                key={healthy.id}
                healthy={healthy}
                handleAddToCart ={handleAddToCart}
                ></Topic>)
                }

            </div>

            <div className="cart-container bg-orange-300">
           <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Health;