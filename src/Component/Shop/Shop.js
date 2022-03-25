import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Shop.css'
const Shop = (props) => {

    const { product } = props;
    return (
        <div className='shop-container'>

            <div className=''>

                <SingleProduct singleProduct={product}></SingleProduct>
            </div>


        </div>
    );
};

export default Shop;