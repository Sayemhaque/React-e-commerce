import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products , setProducts] = useState([]);
    
    const handleCart = (product) => {
        console.log(product)
    }
    useEffect(() => {
        const URL = 'products.json';
        fetch(URL).then(res => res.json()).then(data => setProducts(data))
    } , [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 m-10 '>
            {products?.map(product =>  <Product key={product.id} handleProductCart={handleCart} product={product}/>)}
        </div>
    );
};

export default Products;