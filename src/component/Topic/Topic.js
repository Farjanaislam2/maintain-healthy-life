import React from 'react';

const Topic = (props) => {
  const {healthy, handleAddToCart} =props;

    const {name,img,time,about,age} =healthy;
    


    return (
      
       <div className="grid grid-cols-3 mt-10"> 
        <div className="card w-64 bg-base-100 shadow">
       <figure className="px-10 pt-10">
         <img src={img}alt="" className="rounded-xl" />
       </figure>
       <h2 className="card-title">{name}</h2>
       <div className="card-body items-center text-center">
         <p>{about}</p>
         <p>Age:{age}</p>
         <p>Time:{time}s</p>
         <div className="card-actions">
           <button onClick={()=> handleAddToCart(healthy)} className="btn btn-primary w-full ">Add to list</button>
         </div>
       </div>
     </div>

       </div>
    );
};

export default Topic;