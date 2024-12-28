import React from 'react'

function Fruit() {
  return (
    <>
    <div className="main1 w-[550px] md:w-[720px] lg:w-[855px] xl:w-[990px]  mt-8 ml-12  ">
            <h1 className="w-[479px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px] h-[28.8px] mb-12 text-[50px] font-sans font-semibold text-amber-600 ">
              OUR SELECTION OF PIES
            </h1>
            <p className="font-bold ml-80 mb-2">Current selection of pies</p>
          <div className="table border-1 border-black w-[479px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px] h-[504.8px]">
            <table >
               <thead className="border-2 border-black">
                 <th className="border-2 border-black w-[140px] h-[41px]">Image</th>
                 <th className="border-2 border-black w-[196px] h-[41.6px] text-center">Pie name</th>
                 <th className="border-2 border-black w-[352.79px] h-[41.6px]">Discription</th>
                 <th className="border-2 border-black w-[106px] h-[41.6px]">Price</th>
                 <th className="border-2 border-black w-[168.8px] h-[41.6px]">Details</th>
               </thead>
               <tbody>
                  <tr>
                      <td className="w-[140px] h-[67.6px] border-2 border-black"><img src="/Images/apple-pie.jpg" className="p-2" alt="apple-pie"/></td>
                      <td className="border-2 border-black w-[196px] h-[67.6px] pb-8 pl-16">Apple Pie</td>
                      <td className="border-2 border-black w-[352.79px] h-[67.6px] pb-8 pl-20">Our famous apple pie</td>
                      <td className="border-2 border-black w-[106px] h-[67.6px] pb-8 pl-8">$14.95</td>
                      <td className="border-2 border-black w-[168.8px] h-[67.6px] pb-8 pl-6">View Details</td>
                  </tr>
                  <tr>
                      <td className="w-[140px] h-[67.6px] border-2 border-black"><img src="/Images/cherry-pie-small.jpg" className="p-2 " alt="cherry pie"/></td>
                      <td className="border-2 border-black w-[196px] h-[67.6px] pb-8 pl-11">Cherry pie</td>
                      <td className="border-2 border-black w-[352.79px] h-[67.6px] pb-8 pl-28">A summer classic!</td>
                      <td className="border-2 border-black w-[106px] h-[67.6px] pb-8 pl-8">$18.95</td>
                      <td className="border-2 border-black w-[168.8px] h-[67.6px] pb-8 pl-6 text-[16px] font-sans">View Details</td>
                  </tr>
                  <tr>
                      <td className="w-[140px] h-[67.6px] border-2 border-black"><img src="/Images/rhubarb-pie-small.jpg" className="p-2" alt="Rhubarb Pie"/></td>
                      <td className="border-2 border-black w-[196px] h-[67.6px] pb-8 pl-11">Rhubarb Pie</td>
                      <td className="border-2 border-black w-[352.79px] h-[67.6px] pb-8 pl-24">My God, so sweet!</td>
                      <td className="border-2 border-black w-[106px] h-[67.6px] pb-8 pl-8">$21.95</td>
                      <td className="border-2 border-black w-[168.8px] h-[67.6px] pb-8 pl-6 text-[16px] font-sans">View Details</td>
                  </tr>
                  <tr>
                      <td className="w-[140px] h-[67.6px] border-2 border-black"><img src="/Images/peach-pie.jpg" className=" p-2" alt="Peach pie"/></td>
                      <td className="border-2 border-black w-[196px] h-[67.6px] pb-8 pl-12">Peach pie</td>
                      <td className="border-2 border-black w-[352.79px] h-[67.6px] pb-8 pl-24 text-[16px]">Sweet as peach</td>
                      <td className="border-2 border-black w-[106px] h-[67.6px] pb-8 pl-8">$18.95</td>
                      <td className="border-2 border-black w-[168.8px] h-[67.6px] pb-8 pl-6 text-[16px] font-sans">View Details</td>
                  </tr>
                  <tr>
                      <td className="w-[140px] h-[67.6px] border-2 border-black"><img src="/Images/strawberry-pie-small.jpg" className="p-2 " alt="Strawberry Pie"/></td>
                      <td className="border-2 border-black w-[196px] h-[67.6px] pb-8 pl-8">Strawberry Pie</td>
                      <td className="border-2 border-black w-[352.79px] h-[67.6px] pb-8 pl-12">Our delicious strawberry pie!</td>
                      <td className="border-2 border-black w-[106px] h-[67.6px] pb-8 pl-8">$18.95</td>
                      <td className="border-2 border-black w-[168.8px] h-[67.6px] pb-8 pl-6 text-[16px] font-sans">View Details</td>
                  </tr>
                  <tr>
                      <td className="w-[140px] h-[67.6px] border-2 border-black"><img src="/Images/pecan-pie-small.jpg" className="p-2 " alt="Pecan Pie"/></td>
                      <td className="border-2 border-black w-[196px] h-[67.6px] pb-9 pl-16">Pecan Pie</td>
                      <td className="border-2 border-black w-[352.79px] h-[67.6px] pb-8 pl-24">Simple but good</td>
                      <td className="border-2 border-black w-[106px] h-[67.6px] pb-8 pl-8">$14.95</td>
                      <td className="border-2 border-black w-[168.8px] h-[67.6px] pb-8 pl-6">View Details</td>
                  </tr>
              </tbody>
            </table>
            </div>  
        </div>
    </>
  )
}

export default Fruit