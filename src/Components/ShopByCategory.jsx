import React from 'react'
const ShopByCategory = ({categories}) => {
  return (
    <>
     <div className='flex flex-col p-2 rounded-sm cursor-pointer relative'>
      <img src={categories.categoryImageUrl} alt={categories.category} className='rounded-md'/>
      <h1 className='text-xl text-zinc-700 text-center font-bold absolute bottom-10 left-0 right-0'>{categories.category}</h1>
    </div>
    </>
  )
}

export default ShopByCategory