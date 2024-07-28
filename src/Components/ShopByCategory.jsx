import React from 'react'
const ShopByCategory = ({categories}) => {
  return (
    <>
     <div className='flex flex-col p-2 rounded-sm cursor-pointer relative'>
      <img src={categories.categoryImageUrl} alt={categories.category} className='rounded-md'/>
      <h1 className=' text-sm text-zinc-700 text-center font-bold md:text-xl'>{categories.category}</h1>
    </div>
    </>
  )
}

export default ShopByCategory