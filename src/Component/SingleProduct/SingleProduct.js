import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './SingleProduct.css'

const SingleProduct = (props) => {
    // console.log(props);
    const { img, name, price, ratting } = props.singleProduct;

    return (
        <div className='single-product'>
            <img src={img} alt="" />
            <div className="single-product-info">
                <p className='product-name'>{name}</p>
                <p className='product-name'><small> Price: $ {price}</small> </p>
                <p className='product-name'><small>Ratting: {ratting}</small></p>
            </div>
            <button className='button-curt'>
                <p className='btn-text'>Add to curt</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>
        </div>
    );
};

export default SingleProduct;