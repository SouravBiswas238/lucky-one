import React from 'react';
import ProductName from '../ProductName/ProductName';
import './Curt.css'

const Curt = (props) => {

    const products = props.curt;



    return (
        <div>
            <h4 className='my-curt'>My Curt</h4>
            <p>Selected Items :{props.curt.length}</p>
            {
                products.map(product => <ProductName
                    name={product}
                    key={product.id}
                ></ProductName>)
            }
            <p> <button onClick={() => props.Random()}> Chose 1 for Me</button>
            </p>
            <p><button onClick={() => props.EmptyCurt()}> Reset Product</button>
            </p>
        </div >
    );
};

export default Curt;