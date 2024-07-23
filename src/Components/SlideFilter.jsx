import React from 'react'
import Slides from './Slides';
const SlideFilter = ({products}) => {
  // console.log(products.shoes);
  const SlidesProduct = products.shoes.filter((items) => (
    items.category === "Slides"
  ));

  // console.log(Slides);
  return (
    <>
    <div className='flex justify-between flex-wrap items-center'>
    {SlidesProduct.map((items,index) => (
      <Slides products={items} key={index}/>
    ))}
    </div>
    </>
  )
}

export default SlideFilter