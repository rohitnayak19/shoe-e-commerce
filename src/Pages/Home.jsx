import React from 'react'
import homeImage from '../assets/home.svg'
import homeImage3 from '../assets/home3.svg'
import ProductsList from '../Components/ProductsList'
import { Link } from 'react-router-dom'
import FilterCategory from '@/Components/FilterCategory'
import SlideFilter from '@/Components/SlideFilter'
const Home = ({products}) => {
  return (
    <>
    <div className='margin-auto md:flex md:mt-20'>
      <div className="homeSection bg-gray-100 py-2 px-2 rounded-md my-3 md:bg-white">
        <h1 className='text-5xl pt-4 text-left font-semibold md:text-7xl md:'>Step into Style with <br/>Our Premium Shoes</h1>
        <p className='my-2 text-gray-700 md:text-xl'>Discover the perfect blend of comfort and elegance with our <br/> curated collection of high-quality shoes.</p>
        <div className="homeButton">
          <Link to={'/cartpage'}>
          <button className='bg-zinc-900 text-white md:text-xl px-3 py-2 my-4 rounded-[6px] transition ease-in-out delay-150 flex items-center gap-2 hover:bg-zinc-800'>Shop now<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg></button>
          </Link>
        </div>
      </div>
      <div className="homeImageSection w-full hidden md:block md:w-[600px]">
        <img src={homeImage} alt="" className='w-max'/>
      </div>
      <div className="homeImageSection w-full py-2 rounded-md bg-gray-100 md:hidden">
        <img src={homeImage3} alt="" className='w-max'/>
      </div>
    </div>
    <h1 className='text-center text-4xl md:text-6xl font-semibold my-7 flex justify-center items-center gap-1'>Shop By Category <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 animate-bounce mt-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
</svg>
</h1>
    <FilterCategory products={products}/>
    <div className="margin-auto">
    <h1 className='text-center text-4xl md:text-6xl font-semibold my-7 flex justify-center items-center gap-1'>Latest Collection<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 animate-bounce mt-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
</svg>
</h1>
    <ProductsList products={products}/>
    <h1 className='text-center text-4xl md:text-6xl font-semibold my-7 flex justify-center items-center gap-1'>Top Slide's<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 animate-bounce mt-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
</svg>
</h1>
    <SlideFilter products={products}/>
    </div>
    </>
  )
}

export default Home