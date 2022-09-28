import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Topic from '../Topic/Topic';
import './Health.css'

const Health = () => {
    const [healthyLife, setHealthyLife] =useState([]);
    console.log(healthyLife)
    useEffect(() =>{
fetch('generated.json')
.then(res =>res.json())
.then(data=> setHealthyLife
    (data))
    } , [])
    return (
        <div className='information-container'>
            <div className="health-container">
                {
               healthyLife.map(healthy => <Topic 
                key={healthy.id}
                healthy={healthy}
                
                ></Topic>)
                }

            </div>
            <div className="cart-container">
           <p>count</p>
            </div>
        </div>
    );
};

export default Health;