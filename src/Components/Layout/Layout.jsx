import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
function Layout() {
    return <>
    <Navbar></Navbar>
   <Outlet></Outlet>
    <Footer></Footer>
    </>
}

export default Layout
