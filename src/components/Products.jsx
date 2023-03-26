import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products , setProducts] = useState([]);

    useEffect(() => {
        const URL = 'products.json';
        fetch(URL).then(res => res.json()).then(data => setProducts(data))
    } , [])
    return (
        <div>
          <Product/>
        </div>
    );
};

export default Products;