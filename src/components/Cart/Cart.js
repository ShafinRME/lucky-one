import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleClearToCart }) => {

    let name = '';
    for (const product of cart) {
        name = product.name;
    }

    return (
        <div className='cart'>
            <h1>Selected Phones</h1>
            <h3>{name}</h3>
            <div className='btn-part'>
                <button className='choose-btn'>CHOOSE 1 FOR ME</button> <br />
                <button onClick={handleClearToCart} className='clear-btn'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;