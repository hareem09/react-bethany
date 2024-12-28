import React from 'react'

function Seasonal() {
  return (
    <>
       <div className="main1 w-[550px] md:w-[720px] lg:w-[855px] xl:w-[990px]  mt-8 ml-12  ">
            <h1 className="w-[479px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px] h-[28.8px] mb-12 text-[34px] font-sans font-semibold text-amber-600 tracking-wide ">
              OUR SELECTION OF PIES
            </h1>
            <p className="font-bold ml-96 mb-2 text-[16px]">Current selection of pies</p>
          <div className="table border-1 border-black w-[479px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px] h-[369.8px]">
            <table >
               <thead className="border-2 border-black">
                 <th className="border-2 border-black w-[132px] h-[41px]">Image</th>
                 <th className="border-2 border-black w-[240px] h-[41.6px] text-center">Pie name</th>
                 <th className="border-2 border-black w-[331.79px] h-[41.6px]">Discription</th>
                 <th className="border-2 border-black w-[100.58px] h-[41.6px]">Price</th>
                 <th className="border-2 border-black w-[159.28px] h-[41.6px]">Details</th>
               </thead>
               <tbody>
                  <tr>
                      <td className="w-[132px] h-[67.6px] border-2 border-black"><img src="/Images/cranberry-pie.jpg" className="p-2" alt="cranberry-pie"/></td>
                      <td className="border-2 border-black w-[240px] h-[67.6px] pb-8 pl-16">Cranbery pie</td>
                      <td className="border-2 border-black w-[331.79px] h-[67.6px] pb-8 pl-20">A Christmas favorite</td>
                      <td className="border-2 border-black w-[100.58px] h-[67.6px] pb-8 pl-8">$18.95</td>
                      <td className="border-2 border-black w-[159.28px] h-[67.6px] pb-8 pl-6">View Details</td>
                  </tr>
                  <tr>
                      <td className="w-[132px] h-[67.6px] border-2 border-black"><img src="/Images/christmas-apple-pie.jpg" className="p-2 " alt="Christmas apple pie"/></td>
                      <td className="border-2 border-black w-[240px] h-[67.6px] pb-8 pl-11">Christmas apple pie</td>
                      <td className="border-2 border-black w-[331.79px] h-[67.6px] pb-8 pl-20">Happy holidays with this pie!</td>
                      <td className="border-2 border-black w-[100.58px] h-[67.6px] pb-8 pl-8">$19.95</td>
                      <td className="border-2 border-black w-[159.28px] h-[67.6px] pb-8 pl-6 text-[16px] font-sans">View Details</td>
                  </tr>
                  <tr>
                      <td className="w-[132px] h-[67.6px] border-2 border-black"><img src="/Images/pumpkin-pie-small.jpg" className="p-2" alt="Pumpkin pie"/></td>
                      <td className="border-2 border-black w-[240px] h-[67.6px] pb-8 pl-11">Pumpkin pie</td>
                      <td className="border-2 border-black w-[331.79px] h-[67.6px] pb-8 pl-20">Our Halloween favorite</td>
                      <td className="border-2 border-black w-[100.58px] h-[67.6px] pb-8 pl-8">$18.95</td>
                      <td className="border-2 border-black w-[159.28px] h-[67.6px] pb-8 pl-6 text-[16px] font-sans">View Details</td>
                  </tr>
                  <tr>
                      <td className="w-[132px] h-[67.6px] border-2 border-black"><img src="/Images/birthday-pie.jpg" className=" p-2" alt="Birthday Pie"/></td>
                      <td className="border-2 border-black w-[240px] h-[67.6px] pb-8 pl-12">Birthday Pie</td>
                      <td className="border-2 border-black w-[331.79px] h-[67.6px] pb-8 pl-24 text-[16px]">A happy one!</td>
                      <td className="border-2 border-black w-[100.58px] h-[67.6px] pb-8 pl-8">$25.95</td>
                      <td className="border-2 border-black w-[159.28px] h-[67.6px] pb-8 pl-6 text-[16px] font-sans">View Details</td>
                  </tr>
              </tbody>
            </table>
        </div>    
    </div> 
    </>
  )
}

export default Seasonal