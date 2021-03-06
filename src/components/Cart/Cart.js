import React, { useState } from 'react';
import Product from '../Product/Product';
import './Cart.css'

const Cart = ({ cart, handleClearToCart, handleChooseOne, chese }) => {
    // const [chese, setChese] = useState([])
    // const handleChooseOne = () => {
    //     let choose = [];
    //     let pin = Math.round(Math.random() * cart.length);
    //     setChese(choose.push(cart[pin]));

    // }

    return (
        <div className='cart'>
            <h1>Selected Phones</h1>
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <div>
                            {item.name}
                        </div>
                    </div>
                )
                )

            }
            <div>{chese}</div>

            <div className='btn-part'>
                <button onClick={handleChooseOne} className='choose-btn'>CHOOSE 1 FOR ME</button> <br />
                <button onClick={handleClearToCart} className='clear-btn'>CHOOSE AGAIN</button>
            </div>
        </div >
    );
};

export default Cart;