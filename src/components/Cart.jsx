
import React from 'react';

const Cart = ({ cartItems }) => {

    let total = 0;
    for(const product of cartItems){
     total = total + product.price;
    }
    return (
        <div className='mt-8'>
            <h2 className='text-center font-bold text-lg'>Order summary</h2>
            <h3 className='text-center font-bold mt-4'>Total items : {cartItems.length}</h3>
            <h4 className='text-md font-bold mt-3 text-center'>Total price: ${total}</h4>
            {cartItems.length === 0 ? <p className='mt-5 text-center text-lg font-bold'>No cart items</p> :
                cartItems.map(cart =>
                   <div>
                     <div className='flex gap-5 items-center mt-6' key={cart.id}>
                        <p>Price : ${cart.price}</p>
                        <img src={cart.img} className='w-12 h-12 mt-2' alt="" /> 
                        <p>Quantity : {cart.quantity}</p>
                        </div>
                      
                   </div>
                )}
                <hr className='border-black mt-4' />
             
        </div>
    );
};

export default Cart;