
import React from 'react';

const Cart = ({ cart }) => {

    let total = 0;
    let quantity = 0;
    for(const product of cart){
        console.log(product)
        product.quantity = product.quantity || 1;
     total = total + product.price * product.quantity;
     quantity = quantity + product.quantity;
     console.log(quantity)

    }
    return (
        <div className='mt-8'>
            <h2 className='text-center font-bold text-lg'>Order summary</h2>
            <h3 className='text-center font-bold mt-4'>Total items : {quantity}</h3>
            <h4 className='text-md font-bold mt-3 text-center'>Total price: ${total}</h4>
             <hr className='border-black mt-4' />
             
        </div>
    );
};

export default Cart;