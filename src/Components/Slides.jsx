import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Slides = ({products}) => {
  const [imageIndex, setImageIndex] = useState(0)

const handleMouseEnter = () =>{
  if(products.images.length > 1){
    setImageIndex(1)
  }
  }

  const handleMouseLeave = () =>{
   setImageIndex(0)
    }
  return (
    <>
    <div className="ProductsCard w-[330px] cursor-pointer mb-5">
      <img className="rounded-md border solid border-gray-400 transition-transform duration-300 ease-in-out transform hover:scale-105" src={products.images[imageIndex]} alt={products.name} onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave}/>
      <div className="detail">
        <div className="cardFooter">
          <h2 className='text-xl font-mono mt-1'>{products.model}</h2>
          <p className='text-lg font-bold'>${products.price}</p>
          <p className='font-mono'>{products.category}</p>
        </div>
        <div className="btn">
         <Link to={`/productdetail/${products.id}`}>
         <button className='bg-zinc-900 text-white  py-2 text-lg rounded-sm transition ease-in-out delay-150 flex items-center justify-center gap-2 w-full hover:bg-zinc-800'>Buy now<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg></button>
         </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Slides