import { useState, useEffect } from 'react';
import products from "../data/products.json";
import ProductCard from './ProductCard';

function Products() {
   console.log('products:', products)

  return (
    <div className='items'>
    <section className='item-card'>
        {products.map((product) => 
        <>
        <ProductCard product={product}/>
        </>
        )}
        
    </section>
    </div>
  )
}

export default Products
