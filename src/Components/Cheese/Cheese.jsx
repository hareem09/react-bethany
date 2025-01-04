import React from 'react'

function Cheese() {
  return (
    <>
    <div className="main1 w-[550px] md:w-[720px] lg:w-[855px] xl:w-[990px] flex-shrink mb-9 md:mb-0  md:mt-8 ml-12  ">
            <h1 className="w-[579px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px] h-[64px] md:h-[28.8px] mb-12 text-[22px] md:text-[50px] font-sans font-semibold text-amber-600 ">
              OUR SELECTION OF PIES
            </h1>
            <p className="font-bold ml-20 md:ml-80 mb-2">Current selection of pies</p>
            <div class="table border-1 border-black w-[379px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[966px] h-[600px] md:h-[530.8px]">
              <table >
               <thead className="border-2 border-black">
                 <th className="border-2 border-black w-[97px] h-[41px]">Image</th>
                 <th className="border-2 border-black w-[272px] h-[41.6px] text-center">Pie name</th>
                 <th className="border-2 border-black w-[401.79px] h-[41.6px]">Discription</th>
                 <th className="border-2 border-black w-[74px] h-[41.6px]">Price</th>
                 <th className="border-2 border-black w-[117.8px] h-[41.6px]">Details</th>
               </thead>
               <tbody>
                  <tr>
                      <td className="w-[97.6px] h-[67.6px] border-2 border-black"><img src="/Images/cheesecake-small.jpg" className="p-4" alt="cheesecake"/></td>
                      <td className="border-2 border-black w-[272px] h-[67.6px] pb-8 pl-16">Cheese Cake</td>
                      <td className="border-2 border-black w-[401px] h-[67.6px] pb-8 pl-14">Plain Cheese cake,Plain pleasure</td>
                      <td className="border-2 border-black w-[74px] h-[67.6px] pb-8 pl-2">$12.95</td>
                      <td className="border-2 border-black w-[117px] h-[67.6px] pb-8 pl-1">View Details</td>
                  </tr>
                  <tr>
                      <td className="w-[97.6px] h-[67.6px] border-2 border-black"><img src="/Images/blue-berry-cheesecake-small.jpg" className="p-2" alt="apple pie"/></td>
                      <td className="border-2 border-black w-[272px] h-[67.6px] pb-8 pl-8">Blueberry cheese cake</td>
                      <td className="border-2 border-black w-[401px] h-[67.6px] pb-8 pl-28">You'll love it!</td>
                      <td className="border-2 border-black w-[74px] h-[67.6px] pb-8 pl-2">$17.95</td>
                      <td className="border-2 border-black w-[117.47px] h-[67.6px] pb-8 pl-1 text-[16px] font-sans">View Details</td>
                  </tr>
                  <tr>
                      <td className="w-[97.6px] h-[67.6px] border-2 border-black"><img src="/Images/chocolate-cheesecake-small.jpg" className="p-2" alt=""/></td>
                      <td className="border-2 border-black w-[272px] h-[67.6px] pb-8 pl-8">Chocolate Cheese Cake</td>
                      <td className="border-2 border-black w-[401px] h-[67.6px] pb-8 pl-20">With extra Belgian chocolate!</td>
                      <td className="border-2 border-black w-[74px] h-[67.6px] pb-8 pl-2">$22.95</td>
                      <td className="border-2 border-black w-[117px] h-[67.6px] pb-8 pl-1 text-[16px] font-sans">View Details</td>
                  </tr>
                  <tr>
                      <td className="w-[97.6px] h-[67.6px] border-2 border-black"><img src="/Images/caramel-popcorn-cheesecake-small.jpg" className="p-2" alt=""/></td>
                      <td className="border-2 border-black w-[272px] h-[67.6px] pb-8 pl-2">Caramel Popcorn Cheese Cake</td>
                      <td className="border-2 border-black w-[401px] h-[67.6px] pb-8 pl-2 text-[16px]">We thought it wouldn't be possible but it worked!</td>
                      <td className="border-2 border-black w-[74px] h-[67.6px] pb-8 pl-2">$22.95</td>
                      <td className="border-2 border-black w-[117px] h-[67.6px] pb-8 pl-1 text-[16px] font-sans">View Details</td>
                  </tr>
                  <tr>
                      <td className="w-[97.6px] h-[67.6px] border-2 border-black"><img src="/Images/pistache-cheesecake-small.jpg" className="p-2" alt=""/></td>
                      <td className="border-2 border-black w-[272px] h-[67.6px] pb-8 pl-8">Pistache Cheese Cake</td>
                      <td className="border-2 border-black w-[401px] h-[67.6px] pb-8 pl-12">Go nuts over this cheesecake</td>
                      <td className="border-2 border-black w-[74px] h-[67.6px] pb-8 pl-2">$19.95</td>
                      <td className="border-2 border-black w-[117px] h-[67.6px] pb-8 pl-1 text-[16px] font-sans">View Details</td>
                  </tr>
                  <tr>
                      <td className="w-[97.6px] h-[67.6px] border-2 border-black"><img src="/Images/strawberry-cheesecake-small.jpg" className="p-2" alt=""/></td>
                      <td className="border-2 border-black w-[272px] h-[67.6px] pb-9 pl-8">Strawberry Cheese Cake</td>
                      <td className="border-2 border-black w-[401px] h-[67.6px] pb-8 pl-1">One of the best cheese cakes you'll ever find!</td>
                      <td className="border-2 border-black w-[74px] h-[67.6px] pb-8 pl-2">$18.95</td>
                      <td className="border-2 border-black w-[117px] h-[67.6px] pb-8 pl-1">View Details</td>
                  </tr>
                  
               </tbody>
              </table>
            </div>  
            </div>
    </>
  )
}

export default Cheese