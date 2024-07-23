import React from 'react'
import homeImage from '../assets/home.svg'
import ProductsList from '../Components/ProductsList'
import { Link } from 'react-router-dom'
import FilterCategory from '@/Components/FilterCategory'
import SlideFilter from '@/Components/SlideFilter'
const Home = ({products}) => {
  return (
    <>
    <div className='h-[530px] margin-auto flex items-center justify-between'>
      <div className="homeSection">
        <h1 className='text-7xl font-semibold leadingss'>Step into Style with <br/>Our Premium Shoes</h1>
        <p className='text-lg my-5'>Discover the perfect blend of comfort and elegance with our <br/> curated collection of high-quality shoes.</p>
        <div className="homeButton">
          <Link to={'/cartpage'}>
          <button className='bg-zinc-900 text-white px-6 py-2 text-lg rounded-[6px] transition ease-in-out delay-150 flex items-center gap-2 hover:bg-zinc-800'>Shop now<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg></button>
          </Link>
        </div>
      </div>
      <div className="homeImageSection w-[600px]">
        <img src={homeImage} alt="" className='w-max'/>
      </div>
    </div>
    <h1 className='text-center heading'>Shop By Category</h1>
    <FilterCategory products={products}/>
    <div className="margin-auto">
    <h1 className='text-center heading my-10'>Latest's Products</h1>
    <ProductsList products={products}/>
    <h1 className='text-center heading bg-zinc-100'>Top slides</h1>
    <SlideFilter products={products}/>
    </div>
    </>
  )
}

export default Home