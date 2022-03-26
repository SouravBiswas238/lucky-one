import React, { useEffect, useState } from 'react';
import Curt from '../Curt/Curt';
import RandomProduct from '../RandomProduct/RandomProduct';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Product.css'

const Product = () => {
    const [products, setProducts] = useState([]);
    const [curt, setCurt] = useState([]);
    const [random, setRandom] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const handelAddToCart = (product) => {
        let newCurt = [...curt, product];
        setCurt(newCurt);
    }
    const EmptyCurt = () => {
        let newCurt = [];
        setCurt(newCurt);
    }
    const Random = () => {
        const ranArr = [...curt];
        let a = Math.floor(Math.random() * ranArr.length);

        setRandom(a);
    }
    return (
        <div className='container'>
            <h3>Fancy Pen</h3>
            <p className=''>Select Your Favourite Pen</p>
            <div className='main-container'>
                <div className='cart-container'>
                    <Curt curt={curt}
                        EmptyCurt={EmptyCurt}
                        Random={Random}
                    ></Curt>
                    <div>
                        <RandomProduct
                            random={random}
                        ></RandomProduct>
                    </div>
                </div>

                <div className='products-container'>
                    {
                        products.map(product => <SingleProduct
                            key={product.id}
                            product={product}
                            handelAddToCart={handelAddToCart}
                        ></SingleProduct>)
                    }
                </div>


            </div>
        </div >
    );
};

export default Product;