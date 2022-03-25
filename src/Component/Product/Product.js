import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Product.css'

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='container'>
            <h3>Fancy Pen</h3>
            <p className=''>Select Your Favourite Pen</p>
            <div className='main-container'>

                <div className='products-container'>
                    {
                        products.map(product => <Shop
                            key={product.id}
                            product={product}
                        >
                        </Shop>)
                    }
                </div>
                <div className='cart-container'>
                    curt

                </div>
            </div>
        </div >
    );
};

export default Product;