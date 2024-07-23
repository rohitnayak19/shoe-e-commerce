import React from 'react'
import Product from './Products'

const ProductsList = ({products}) => {
  const firstEightProduct = products.shoes.slice(0,8);
 
  return (
    <>
    <div className="ProductList flex justify-between flex-wrap">
      {firstEightProduct.map((products) =>(
        <Product key={products.id} products={products}/>
      ))}
    </div>
    </>
  )
}

export default ProductsList