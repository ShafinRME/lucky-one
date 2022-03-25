import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, price, id } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <p className='product-price'>{price}</p>
        </div>
    );
};

export default Product;