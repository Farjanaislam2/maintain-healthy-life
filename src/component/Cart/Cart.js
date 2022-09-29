import React, { useState } from 'react';
import swal from 'sweetalert';

const Cart = ({cart}) => {
//time button
const [time, setTime] =useState (0)
const handleTimeAdd = (time)=>{
    setTime(time)
}

 //sweet button

 const sweetButton =() =>{
    swal("Congratulation!");

 }


    


    let total = 0;
    for(const health of cart){
        //console.log(health)
        total =total + health.time;
    }
    //console.log(total)
    return (
        <div className='sticky top-0 p-10 '>

{/* Self details */}

           <h1 className='text-lg font-bold text-blue-900'>Farjana Islam</h1>
           <p className='text-blue-600'>Mymensingh,Bangladesh</p>
           <div className='flex text-black gap-5 mt-5 bg-gray-400  rounded-lg p-4'>
            <div>
                <h1><span className='text-xl font-bold'>55</span> Kg</h1>
                <p>Weight</p>
            </div>
            <div>
                <h1 className='text-xl font-bold'>6.5</h1>
<p>Height</p>
            </div>
            <div>
                <h1> <span className='text-xl font-bold'>23</span>yrs</h1>
                <p>Age</p>
            </div>
           </div>

           {/* break */}

           <h1 className='text-black mt-6 mb-4 font-semibold text-lg'>Add A Break</h1>
           <div className='bg-gray-400 text-black pt-3 pb-3 rounded-lg'>

           <div className='space-x-2 ml-2'>
           <button className='bg-white rounded-full p-2 font-bold' onClick={() =>handleTimeAdd(10)}>10s</button>
            <button className='bg-white rounded-full p-2 font-bold'onClick={() =>handleTimeAdd(20)}>20s</button>
            <button className='bg-white rounded-full p-2 font-bold'onClick={() =>handleTimeAdd(30)}>30s</button>
            <button className='bg-white rounded-full p-2 font-bold'onClick={() =>handleTimeAdd(40)}>40s</button>
           </div>

           </div>

           {/* Exercise details */}

           <div className='text-black mt-10 font-semibold'>
            <h1>Exercise Details</h1>
           
           <div className='bg-gray-300 rounded-lg p-4 mt-5'>
           <p className='mt-5 mb-2'>Exercise Time:  {total}</p>
           </div>

           <div>
           <div className='bg-gray-300 rounded-lg p-4 mt-5'>
           <p className='mt-5 mb-2'>Break Time: {time} </p>
           </div>
           </div>
           </div>

           <button class="btn btn-wide text-white mt-10 " onClick={sweetButton}>Activity Completed</button>

        </div>
    );
};

export default Cart;