import React from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
   <>
    <footer className="w-[631px] sm:w-[980px] md:w-[1186px] lg:w-[1394.4px] xl:w-[1582px] h-[152px] bg-rose-300  flex mt-40 lg:mt-10">
      <div className="text-start pl-5 pt-5 font-sans text-[16px]">
        <p>Our address is</p>
        <p>Bethany's Pie Shop - Bakery Street 5555 Brussels, Belgium</p>
        <span>Contact us via <NavLink to={'#'} className="text-cyan-600 underline">email</NavLink></span>
        <p>2023 Bethany's Pie Shop - All rights reserved</p>
      </div>
    </footer>
   </>
  )
}

export default Footer