import React from 'react'
import ShopByCategory from './ShopByCategory';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FilterCategory = ({products}) => {
    // console.log(products.shoes);

    const categories = [...new Set(products.shoes.map(shoe => JSON.stringify({ category: shoe.category, categoryImageUrl: shoe.categoryImageUrl }))
        )
    ].map(item => JSON.parse(item));

    // console.log(categories);
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      
    };

  return (
    <>
      <div className='bg-zinc-200 py-6'>
      <div className='m-auto md:w-3/4'>
      <Slider {...settings}>
        {categories.map((categories,index) =>(
          <ShopByCategory categories={categories} key={index}/>
        ))}
        </Slider>
      </div>
      </div>
    </>
  )
}

export default FilterCategory