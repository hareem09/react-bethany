import React from 'react'
import { Link } from 'react-router-dom'
function Aside() {
  return (
   <>
   
    <div className="aside w-[250px] h-[500px] md:h-[1837px] lg:h-[1849px] xl:h-[1879px] 2xl:h-[2030px] flex flex-col font-sans  text-center align-middle md:ml-40 ">
        <img src="Images\bethany-badge-logo.png" alt="" className="logo2 mt-14 ml-20 "/>
        <h5 className="heading mt-3 self-center text-bold text-SM w-48 h-6 ml-20">
            <b>BROWSE OUR PICTURES</b>
        </h5>
        <ul className="text-center underline text-amber-600 ml-20">
            <li><Link to='/Pies' >ALL PIES</Link></li>
            <li><Link to='/Cheese'>CHEESE CAKES</Link></li>
            <li><Link to='/Fruit'>FRUIT PIES</Link></li>
            <li><Link to='/Seasonal'>SEASONAL PIES</Link></li>
            <li><Link>PROMOTIONS</Link></li>
        </ul>
    </div>
   </>
  )
}

export default Aside