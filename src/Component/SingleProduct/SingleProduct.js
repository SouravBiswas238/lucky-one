import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './SingleProduct.css'

const SingleProduct = (props) => {
    // console.log(props);
    const { img, name, price, ratings } = props.product;


    return (
        <div className='single-product'>
            <img src={img} alt="" />
            <div className="single-product-info">
                <p className='product-name'>{name}</p>
                <p className='product-name'><small> Price: $ {price}</small> </p>
                <p className='product-name'><small>Ratting: {ratings}</small></p>
            </div>
            <button className='button-curt' onClick={() => props.handelAddToCart(props.product)} >
                <p className='btn-text'>Add to curt</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>
        </div >
    );
};

export default SingleProduct;