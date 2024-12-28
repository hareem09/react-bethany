import React from 'react'
import { NavLink } from 'react-router-dom'
function Home() {
  return (
    <>
    
    <div className="main1 w-[550px] md:w-[720px] lg:w-[855px] xl:w-[990px]   mt-8 ml-12 flex-grow">
      <h1 className="w-[479px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px] h-[48px] mb-40 sm:mb-10 text-[40px] font-sans font-bold text-amber-600">Welcome to Bethany's Pie Shop</h1>
      <img src="Images\hero.jpg" className="mr-6 w-[479px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px] h-[300px] mt-4 mb-6 ml-2" alt=""/>
      <h2 className="text-[36px] font-bold mt-4 mb-2 w-[479px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px] h-[38.4px]">Our History</h2>
      <p className="mt-4 mb-3  w-[479px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px]h-[30px] md:h-[120px]">Welcome to <b>Bethany's Pie Shop</b>, where pie-baking perfection meets convenience! For countless years, Bethany's passion for crafting the most scrumptious pies has been an unmatched delight. Our journey began in 2013 when we unveiled our first charming store in the heart of Brussels (Belgium), nestled in a cozy little street near the illustrious Grand Market. It was here that our pies first captured the hearts and taste buds of people from every corner of the globe, from delectable soft cakes to heavenly cheesecakes and tantalizingly spiced apple pies. Our store's extraordinary success was nothing short of a culinary fairy tale.</p>
      <img src="Images\bethany.jpg" className="w-[479px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[869.4px] h-[200px] md:h-[427px] ml-2" alt=""/>
      <p className="mt-16 md:mt-6 font-sans text-[16px] w-[479px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px] h-[96px]">As the demand for Bethany's divine creations soared, an incredible milestone was reached in 2015, when we proudly sold an astonishing 100 pies each day! Naturally, our beloved Pie Shop had to evolve, and we relocated to a grander, more spacious building to better serve our cherished patrons. The love and support we received from our ever-growing community inspired us to explore new possibilities.</p>
      <p className="mt-16 md:mt-8 font-sans text-[16px] w-[479px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px] h-[72px]">In response to numerous heartfelt requests from pie enthusiasts far and wide, we knew the time had come to bring our mouthwatering treats to your doorstep. Thus, in 2023, the idea of our very own webstore was born: a virtual haven where you can now relish the delight of ordering Bethany's scrumptious pies from the comfort of your own home, no matter where you reside in the world.</p>
      <p className="mt-20 md:mt-7 font-sans text-[16px] w-[479px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px] h-[72px]">What sets us apart, you ask? At Bethany's Pie Shop, we believe in using only the finest, handpicked ingredients to create each and every masterpiece. We meticulously source the freshest fruits, creamiest cheeses, and most aromatic spices to ensure that every bite of our pie is an unrivaled, tantalizing experience</p>
      <span className="w-[479px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px] h-[24px] mt-48 lg::mt-10">Download our full <NavLink to={'#'} className="text-cyan-600 underline">Price list</NavLink></span>
      <hr className="mt-6"/>
      <h1 className="font-bold text-[36px] font-sans mt-9 w-[479px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px] h-[38.4px]">OUR WEEKLY PROMOTIONS</h1>
      <p className="m-5 w-[479px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px] h-[24px]">$12.95</p>
      <img src="Images\pieoftheweek.jpg" className="w-[479px] sm:w-[550px] md:w-[720px] lg:w-[772px] h-[472px] ml-2" alt=""/>
     </div> 
     
    </>
  )
}

export default Home