
import Product from './Product';

const Products = ({products,handleCart}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 m-10 '>
            {products?.map(product =>  <Product key={product.id} 
            handleCart={handleCart} 
            product={product}/>)}
        </div>
    );
};

export default Products;