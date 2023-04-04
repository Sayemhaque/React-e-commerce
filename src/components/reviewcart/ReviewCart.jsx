import React from 'react';

const ReviewCart = ({cartItem}) => {
    console.log(cartItem.quantity)
    return (
        <div>
                   <div>
                     <div className='flex gap-5 items-center mt-6' key={cartItem.id}>
                     <img src={cartItem.img} className='w-12 h-12 mt-2' alt="" /> 
                        <p>Price : ${cartItem.price}</p>
                        <p>Quantity : {cartItem.quantity}</p>
                        <button className='bg-red-200 px-3 py-2'>Delete</button>
                        </div>
                      
                   </div>
             
        </div>
    );
};

export default ReviewCart;