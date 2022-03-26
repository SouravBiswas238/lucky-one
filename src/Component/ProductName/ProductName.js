import React from 'react';
import './ProductName.css'

const ProductName = (props) => {

    const Pname = props.name;


    return (
        <div>
            <div className='curt-box' >
                <div className='curt-img'>
                    <img src={Pname.img} alt="" />
                </div>
                <p>{Pname.name} </p>
            </div>

        </div>
    );
};

export default ProductName;