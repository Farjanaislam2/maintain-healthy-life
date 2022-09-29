import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <p>count</p>
           { <p>selcted items:{cart.length}</p> }
        </div>
    );
};

export default Cart;