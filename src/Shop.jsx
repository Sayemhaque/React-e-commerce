import React, { useEffect, useState } from 'react';
import Cart from './components/Cart';
import Products from './components/Products';

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState([])
    
    const handleCart = (product) => {
        const newCart = [...cart , product];
        setCart(newCart)
    }
    useEffect(() => {
        const URL = 'products.json';
        fetch(URL).then(res => res.json()).then(data => setProducts(data))
      
    } , [])
    console.log(cart)
    return (
        <div className='grid grid-cols-4'>
            {/* Products section */}
            <div className='col-span-3'>
                <Products products={products} handleCart={handleCart}/>
            </div>

            {/* cart section */}
            <div className=''>
                <Cart cartItems={cart}/>
            </div>
        </div>
    );
};

export default Shop;