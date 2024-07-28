import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const Header = ({}) => {
    const [filterProduct, setFilterProduct] = useState("")
    const handleChange = (e) =>{
        setFilterProduct(e.target.value)
    }
  return (
    <>
    <section className="boxshadow bg-white sticky top-0 left-0 right-0 z-10 border-b solid border-zinc-300">
    <div className="margin-auto flex flex-col md:flex-row md:justify-between md:py-4">
        <div className="logo">
            <NavLink to={'/'}><span className='text-gray-700 text-3xl'>Sole</span><span className='text-gray-500 text-2xl mx-1'>heaven...</span></NavLink>
        </div>
        <div className='my-1'>
            <input 
            value={filterProduct} 
            type="text" placeholder='Search shoes...' 
            className='w-72 md:w-96 p-2 bg-gray-100' 
            onChange={handleChange}/>
        </div>

        <ul className='flex gap-5 text-lg my-2'>
            <li>
                <NavLink to={'/'} 
                className={({isActive}) => `${isActive ? "text-black border-solid border-b-2 border-black" : "text-gray-400"}`}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/about'} className={({isActive}) => `${isActive ? "text-black border-solid border-b-2 border-black" : "text-gray-400"}`}>About</NavLink>
            </li>
            <li className='relative'>
                <NavLink 
                to={'/CartPage'} 
                className={({isActive}) => `${isActive ? "text-black border-solid border-b-2 border-black" : "text-gray-400"}`}>Cart <ShoppingCartTwoToneIcon/></NavLink>
            </li>
        </ul>
    </div>
    </section>
    </>
  )
}

export default Header