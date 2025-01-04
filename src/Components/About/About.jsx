import React from 'react'
import { NavLink } from 'react-router-dom'
function About() {
  return (
    <>
    <div className="main1  w-[550px] md:w-[720px] lg:w-[855px] xl:w-[990px]  mt-8 ml-12 ">
            <h1 className="w-[498.4px] h-[44.8px] mb-10 text-[40px] font-sans font-bold text-amber-600">About Bethany's Pie Shop</h1>
            <p className="w-[479px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px] h-[24px] mb-4 font-sans text-[16px]">In the video below, you can see how we create our pies.</p>
            {/* <!-- <video class="w-[942px] h-[270px]" controls loop src="https://youtu.be/jWgMt5GCo7U">
                <source src="https://youtu.be/jWgMt5GCo7U" type="video/mp4">
            </video> --> */}
            <iframe className="sm:h-[430px] w-[516px] md:w-[696px] lg:w-[831px] xl:w-[942px] h-[370px]" width="942" height="370" src="https://www.youtube.com/embed/jWgMt5GCo7U" title="ساعة كاملة 🕛🎧 | تلاوة تقشعر لها الأبدان بصوت عبدالرحمن مسعد 🥺23❤️ | Reciter Abdul Rahman Mossad" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div> 
  
    </>
  )
}

export default About