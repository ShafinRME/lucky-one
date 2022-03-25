import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    const { name, img, price, id } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <p className='product-price'>{price}</p>
            <div>
                <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                    <p className='btn-text'>ADD TO CART <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </p>
                </button>
            </div>
        </div>
    );
};

export default Product;