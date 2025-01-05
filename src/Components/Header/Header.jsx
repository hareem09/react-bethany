import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <nav className="navbar relative flex min-w-min sm:w-[980px] md:w-[1186px] lg:w-[1394.4px] xl:w-[1582px] md:h-[87.44px] flex-shrink bg-amber-600">
        {/* Logo Section */}
        <div className="logo md:w-60 md:h-16 mr-4 p-1 py-1 cursor-pointer">
          <img
            src="Images/bethany-horizontal-logo.png"
            className="ml-10 w-16 md:w-48 md:h-[62px]"
            alt="Logo"
          />
        </div>

        {/* Navigation Menu */}
        <ul
          className={`list flex-col w-[631px] bg-amber-600 text-white font-sans absolute translate-y-10 md:static md:translate-y-0 md:w-auto md:flex md:flex-row md:pt-5 ${
            toggle ? 'flex' : 'hidden'
          }`}
        >
          <li className="w-20 h-11 text-[18px] font-bold hover:text-black">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `w-16 h-11 ml-3 p-2 ${isActive ? 'text-black' : 'text-white'}`
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="w-[72px] h-11 text-[18px] font-bold hover:text-black">
            <NavLink
              to="/Pies"
              className={({ isActive }) =>`w-14 h-11 ml-4 p-2 ${isActive ? 'text-black' : 'text-white'}`}
            >
              PIES
            </NavLink>
          </li>
          <li className="w-28 h-11 text-[18px] font-bold hover:text-black">
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `w-24 h-11 ml-4 p-2 ${isActive ? 'text-black' : 'text-white'}`
              }
            >
              CONTACT
            </NavLink>
          </li>
          <li className="w-24 h-11 text-[18px] font-bold hover:text-black">
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `w-20 h-11 ml-4 p-2 ${isActive ? 'text-black' : 'text-white'}`
              }
            >
              ABOUT
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <label
          htmlFor="toggle"
          className="mr-10 text-2xl leading-10 w-16 md:hidden cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          &#9776;
        </label>
      </nav>
    </header>
  );
}

export default Header;

