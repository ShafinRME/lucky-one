import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let name = '';
    for (const product of cart) {
        name = product.name;
    }

    return (
        <div className='cart'>
            <h1>Selected Phones</h1>
            <h3>{name}</h3>
        </div>
    );
};

export default Cart;