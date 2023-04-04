import { getShoppingCart } from "../utilities/fakedb";

const loadCartProducts = async ()  => {
    const res = await fetch('products.json');
    const products = await res.json()
    
    const storedCart = getShoppingCart();
    
    let savedCart = []
    for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct){
            const qunatity = storedCart[id]
            addedProduct.qunatity = qunatity
            savedCart.push(addedProduct)
        } 
    }
    return savedCart
}

export default loadCartProducts;