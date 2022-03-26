import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const [choose, setChoose] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const exist = cart.find(citem => citem.id === product.id);
        if (!exist) {
            setCart([...cart, { ...product }])
        }
        // const newCart = [...cart, product];
        // setCart(newCart);
    }
    const handleChooseOne = () => {
        let newItem = [];
        newItem.push(cart);
        console.log(newItem)
        const pin = Math.round(Math.random() * 12);
        let newCart2 = [];
        newCart2.push(newItem[pin]);
        setChoose(newCart2);
        console.log(choose);

    }

    const handleClearToCart = () => {
        const newCart2 = [];
        setCart(newCart2);
    }



    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    choose={choose}
                    handleClearToCart={handleClearToCart}
                    handleChooseOne={handleChooseOne}
                ></Cart>
            </div>
        </div >
    );
};

export default Shop;