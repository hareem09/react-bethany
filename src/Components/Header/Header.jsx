import React from 'react'
import {useState} from 'react'
import { NavLink } from 'react-router-dom'
function Header() {

  const [toggle,setToggle]=useState(true)
  return (
    <>
    <header> 
    <nav className="navbar relative flex w-[631px] sm:w-[980px] md:w-[1186px] lg:w-[1394.4px] xl:w-[1582px] h-[87.44px]  bg-amber-600 ">
        <div className="logo w-60 h-16 mr-4 p-1 py-1 cursor-pointer">
         <img src="Images\bethany-horizontal-logo.png"  className="ml-10 w-48 h-[62px] " alt=""/>
        </div>
      <label htmlFor="toggle" className="mr-10 text-2xl leading-10  w-16 float block md:hidden  cursor-pointer ">&#9776;</label>
      <input type="checkbox" id="toggle" className="hidden" onClick={()=>setToggle(!toggle)</input>}/>
        <ul className={`${toggle}?"list absolute translate-y-32 flex-col w-[631px]  bg-amber-600 md:static md:w-0 md:translate-y-0  md:flex md:flex-row self-center text-white font-sans hidden"`}>
            <li className="w-20 h-11 text-[18px] font-bold hover:text-black"><NavLink to={'/'}  className={({isActive})=>`w-16 ${isActive ?'text-black':'text-white'} h-11  ml-3 p-2`}>HOME</NavLink></li>
            <li className="w-[72px] h-11 text-[18px] font-bold hover:text-black "><NavLink to={'/Pies'} className="w-14 h-11 ml-4 p-2">PIES</NavLink></li>
            <li className="w-28 h-11 text-[18px] font-bold hover:text-black"><NavLink to={'/Contact'} className={({isActive})=>`w-24 ${isActive ?'text-black':'text-white'} h-11 ml-4 p-2`}>CONTACT</NavLink></li>
            <li className="w-24 h-11 text-[18px] font-bold hover:text-black"><NavLink to={'/About'} className={({isActive})=>`w-20 h-11 ${isActive ?'text-black':'text-white'} ml-4 p-2`}>ABOUT</NavLink></li>
        </ul>
    </nav>
    </header>
    </>
  )
}
export default Header
