import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Components/CartProvider';

const ProductDetail = ({products}) => {
  const {productId} = useParams()
  const product = products.shoes.find(p => p.id === parseInt(productId));
  const [index, setIndex] = useState(0)
  const {addToCart} = useContext(CartContext);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  if (!product) return <p>Product not found</p>;

  //OnMouse enter function

  const handleMouseEnter = (e) =>{
    // console.log(e._targetInst.index);
    setIndex(e._targetInst.index)
  }

  const handleAddToCart = () =>{
    addToCart(product)
    setShowSuccessMessage(true)
    setTimeout(() => setShowSuccessMessage(false),2000);

  }

  return (
    <>
    <div className='ProductDetailPage extra-margin flex gap-10'>
      <div className="detailImages flex gap-5">
        <div className="imageCol w-[110px] flex flex-col gap-1 cursor-pointe">
          {product.images.map((images ,index) =>(
            <img key={index} src={images} onMouseEnter={handleMouseEnter} className='border-2 solid bg-slate-500 rounded-md cursor-pointer'/>
          ))}
        </div>
        <div className="mainImage w-[450px]">
          <img src={product.images[index]} alt="" className='w-fit border-2 solid bg-slate-500 rounded-md cursor-pointer'/>
        </div>
      </div>

      <div className="allProductDetail">
        <h1 className='text-3xl'>{product.model}</h1>
        <h2 className='mt-2 font-semibold text-xl'>${product.price}</h2>
        <div className="flex items-center gap-4 align-middle text-sm font-mono italic">
        <h3 className='italic text-xl text-zinc-500 my-2'>{product.category}</h3>
        <h3 className='bg-gray-200'>{product.release_date}</h3>
        </div>
        <button onClick={handleAddToCart} className='bg-zinc-900 text-white px-6 py-2 font-mono rounded-sm transition ease-in-out delay-150 flex items-center gap-2 hover:bg-zinc-700 mt-3'>Add to cart<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</button>
{showSuccessMessage && (
            <div className="text-green-500 mt-3 bg-gray-200 rounded-md p-2 flex justify-between items-center">
              <span className=''>Product added to cart successfully!</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
</svg>
            </div>
          )}
      </div>
    </div>
    </>
  )
}

export default ProductDetail