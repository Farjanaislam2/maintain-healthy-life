import React from 'react';

const Topic = (props) => {
// console.log
// (props.healthy)
    const {name,img,time,about,age} =props.healthy;



    return (
       <div className="flex"> 
        <div className="card w-96 bg-base-100 shadow">
       <figure className="px-10 pt-10">
         <img src= "../../../image/diet.jpg"alt="" className="rounded-xl" />
       </figure>
       <h2 className="card-title">{name}</h2>
       <div className="card-body items-center text-center">
         <p>{about}</p>
         <div className="card-actions">
           <button className="btn btn-primary w-full ">Add to list</button>
         </div>
       </div>
     </div>

       </div>
    );
};

export default Topic;