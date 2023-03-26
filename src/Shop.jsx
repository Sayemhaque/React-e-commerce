import React from 'react';
import Cart from './components/Cart';
import Products from './components/Products';

const Shop = () => {
    return (
        <div className='grid grid-cols-4'>
            {/* Products section */}
            <div className='col-span-3'>
                <Products/>
            </div>

            {/* cart section */}
            <div className=''>
                <Cart/>
            </div>
        </div>
    );
};

export default Shop;