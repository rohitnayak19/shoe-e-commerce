import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Banner from './Banner'

const Layout = ({products}) => {
  return (
    <>
    <Banner/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout