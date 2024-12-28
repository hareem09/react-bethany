import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Aside from './Components/Aside/Aside'

function Layout() {
  return (
    <>
    <div className="body w-full md:w-auto sm:max-h-1 flex flex-col">
    <Header />
    <div className="main w-full md:w-auto  flex flex-wrap ">
    <Aside/>
    <Outlet/>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Layout