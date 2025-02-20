import React from 'react'

function Seasonal() {
  return (
    <>
       <div className="main1 w-[550px] md:w-[720px] lg:w-[855px] xl:w-[990px]  mt-8 md:ml-12  ">
            <h1 className="w-[479px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px] h-[28.8px] mb-12 md:text-[34px] font-sans font-semibold text-amber-600 tracking-wide ">
              OUR SELECTION OF PIES
            </h1>
            <p className="font-bold md:ml-96 mb-2 text-[16px]">Current selection of pies</p>
          <div className="table border-1 border-black w-[350px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px] md:h-[369.8px] text-sm md:text-base">
            <table >
               <thead className="border-2 border-black">
                 <th className="border-2 border-black md:w-[132px] md:h-[41px]">Image</th>
                 <th className="border-2 border-black md:w-[240px] md:h-[41.6px] text-center">Pie name</th>
                 <th className="border-2 border-black md:w-[331.79px] md:h-[41.6px]">Discription</th>
                 <th className="border-2 border-black md:w-[100.58px] md:h-[41.6px]">Price</th>
                 <th className="border-2 border-black md:w-[159.28px] md:h-[41.6px]">Details</th>
               </thead>
               <tbody>
                  <tr>
                      <td className="w-[132px] h-[67.6px] border-2 border-black"><img src="/Images/cranberry-pie.jpg" className="p-2" alt="cranberry-pie"/></td>
                      <td className="border-2 border-black md:w-[240px] md:h-[67.6px] md:pb-8 md:pl-16">Cranbery pie</td>
                      <td className="border-2 border-black md:w-[331.79px] md:h-[67.6px] md:pb-8 md:pl-20">A Christmas favorite</td>
                      <td className="border-2 border-black md:w-[100.58px] md:h-[67.6px] md:pb-8 md:pl-8">$18.95</td>
                      <td className="border-2 border-black md:w-[159.28px] md:h-[67.6px] md:pb-8 md:pl-6">View Details</td>
                  </tr>
                  <tr>
                      <td className="w-[132px] h-[67.6px] border-2 border-black"><img src="/Images/christmas-apple-pie.jpg" className="p-2 " alt="Christmas apple pie"/></td>
                      <td className="border-2 border-black md:w-[240px] md:h-[67.6px] md:pb-8 md:pl-11">Christmas apple pie</td>
                      <td className="border-2 border-black md:w-[331.79px] md:h-[67.6px] md:pb-8 md:pl-20">Happy holidays with this pie!</td>
                      <td className="border-2 border-black md:w-[100.58px] md:h-[67.6px] md:pb-8 md:pl-8">$19.95</td>
                      <td className="border-2 border-black md:w-[159.28px] md:h-[67.6px] md:pb-8 md:pl-6 md:text-[16px] font-sans">View Details</td>
                  </tr>
                  <tr>
                      <td className="w-[132px] h-[67.6px] border-2 border-black"><img src="/Images/pumpkin-pie-small.jpg" className="p-2" alt="Pumpkin pie"/></td>
                      <td className="border-2 border-black md:w-[240px] md:h-[67.6px] md:pb-8 md:pl-11">Pumpkin pie</td>
                      <td className="border-2 border-black md:w-[331.79px] md:h-[67.6px] md:pb-8 md:pl-20">Our Halloween favorite</td>
                      <td className="border-2 border-black md:w-[100.58px] md:h-[67.6px] md:pb-8 md:pl-8">$18.95</td>
                      <td className="border-2 border-black md:w-[159.28px] md:h-[67.6px] md:pb-8 md:pl-6 md:text-[16px] font-sans">View Details</td>
                  </tr>
                  <tr>
                      <td className="w-[132px] h-[67.6px] border-2 border-black"><img src="/Images/birthday-pie.jpg" className=" p-2" alt="Birthday Pie"/></td>
                      <td className="border-2 border-black md:w-[240px] md:h-[67.6px] md:pb-8 md:pl-12">Birthday Pie</td>
                      <td className="border-2 border-black md:w-[331.79px] md:h-[67.6px] md:pb-8 md:pl-24 md:text-[16px]">A happy one!</td>
                      <td className="border-2 border-black md:w-[100.58px] md:h-[67.6px] md:pb-8 md:pl-8">$25.95</td>
                      <td className="border-2 border-black md:w-[159.28px] md:h-[67.6px] md:pb-8 md:pl-6 md:text-[16px] font-sans">View Details</td>
                  </tr>
              </tbody>
            </table>
        </div>    
    </div> 
    </>
  )
}

export default Seasonal
