import React, { useState } from 'react';
import Cart from '../Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewCart from '../reviewcart/ReviewCart';

const OrderReviw = () => {
    const cart = useLoaderData();
    return (
        <div className='grid grid-cols-2 place-items-center'>
            <div>
               {cart.map(product => <ReviewCart cartItem={product}/>)}
            </div>
         <Cart cart={cart}/>
        </div>
    );
};

export default OrderReviw;