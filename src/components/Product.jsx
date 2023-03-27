import React, { useEffect, useState } from 'react';

const Product = (props) => {
    const {name,img,price,quantity,ratings,ratingsCoun,seller,shipping,stock}  = props.product;
   const handleCart = props.handleCart;
   
    return (
        <div>
           <div className='bg-gray-200 relative  rounded-lg w-full h-full border-1 p-2 border-gray-300 '>
            <img src={img} className='h-[286px] w-[295px]' alt="" />
            <div className='py-8'>
              <span className='text-sm font-bold mt-2'>{name}</span>
              <p className='text-sm font-bold mt-2'>Price: ${price}</p>
              <p className='text-sm font-bold mt-2 mb-3'>Manufaturer: ${seller}</p>
              <button className='w-full absolute   bottom-0 py-2 left-0 rounded-lg text-white bg-slate-800' onClick={() => handleCart(props.product)}>Add to cart</button>
            </div>
           </div>
        </div>
    );
};

export default Product;