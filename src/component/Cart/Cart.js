import React from 'react';

const Cart = ({cart}) => {
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
           <button className='bg-white rounded-full p-2 font-bold'>10s</button>
            <button className='bg-white rounded-full p-2 font-bold'>10s</button>
            <button className='bg-white rounded-full p-2 font-bold'>10s</button>
            <button className='bg-white rounded-full p-2 font-bold'>10s</button>
           </div>

           </div>

           {/* Exercise details */}

           <div className='text-black mt-10 font-semibold'>
            <h1>Exercise Details</h1>
            <p className='mt-5 mb-2'>Exercise Time:</p>
            <input type="text" placeholder="200 second" class="input w-full max-w-xs bg-white" />
            <p className='mt-5 mb-2'>Break Time:</p>
            <input type="text" placeholder="10 second" class="input w-full max-w-xs bg-white" />
           </div>

           <button class="btn btn-wide text-white mt-10 ">Activity Completed</button>

        </div>
    );
};

export default Cart;