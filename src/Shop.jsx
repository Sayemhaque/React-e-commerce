import React, { useEffect, useState } from 'react';
import Cart from './components/Cart';
import Products from './components/Products';
import { addToDb, getShoppingCart } from './utilities/fakedb';

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState([])
    
    const handleCart = (product) => {
        let newCart = [];
       
        const exist = cart.find(p => p.id === product.id)
        if(!exist){
            product.quantity = 1
            newCart = [...cart , product];
        }else{
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(p => p.id !== product.id)
            newCart = [...remaining ,exist]
        }
        setCart(newCart)
        addToDb(product.id)
    }
    useEffect(() => {
        const URL = 'products.json';
        fetch(URL).then(res => res.json()).then(data => setProducts(data))
       
    } , [])


    useEffect(() =>  {
        const storedCart = getShoppingCart()
        const savedCart = []
         for(const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
            console.log(addedProduct)
          
         }
         setCart(savedCart)
        
    } ,[products])

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