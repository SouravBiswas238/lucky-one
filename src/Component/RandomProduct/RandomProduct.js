import React from 'react';
import './RandomProduct.css'

const RandomProduct = (props) => {

    return (
        <div className='random-product'>
            <p>Random Product: {props?.random?.name}</p>
        </div>
    );
};

export default RandomProduct;