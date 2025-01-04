import React from 'react'

function Pies() {
  return (
   <>
   <div className="main1 w-[550px] md:w-[720px] lg:w-[855px] mt-64 sm:mt-8 md:ml-12 ">
          <h1 className="w-[550px] md:w-[720px] lg:w-[838px] h-[48px] mb-20 sm:mb-12 text-[21px] md:text-[50px] font-sans font-semibold text-amber-600 ">
            OUR SELECTION OF PIES
          </h1>
          <p className="font-bold md:ml-80 mb-2">Current selection of pies</p>
          <div className="table border-1 border-black w-[379px] sm:w-[550px] md:w-[720px] lg:w-[831px] h[1270px] sm:h-[1180.8px]">
            <table >
             <thead className="border-2 border-black">
               <th className="border-2 border-black w-[87px] h-[41px]">Image</th>
               <th className="border-2 border-black w-[232px] h-[41.6px] text-center">Pie name</th>
               <th className="border-2 border-black w-[340px] h-[41.6px]">Discription</th>
               <th className="border-2 border-black w-[66px] h-[41.6px]">Price</th>
               <th className="border-2 border-black w-[102px] h-[41.6px]">Details</th>
             </thead>
             <tbody>
                <tr>
                    <td className="w-[87.6px] h-[67.6px] border-2 border-black"><img src="/Images/cheesecake-small.jpg" className="p-2" alt="cheesecake"/></td>
                    <td className="border-2 border-black w-[232px] h-[67.6px] pb-8 pl-16">Cheese Cake</td>
                    <td className="border-2 border-black w-[340px] h-[67.6px] pb-8 pl-14">Plain Cheese cake,Plain pleasure</td>
                    <td className="border-2 border-black w-[66px] h-[67.6px] pb-8 pl-2">$12.95</td>
                    <td className="border-2 border-black w-[102px] h-[67.6px] pb-8 pl-1">View Details</td>
                </tr>
                <tr>
                    <td className="w-[87.6px] h-[67.6px] border-2 border-black"><img src="/Images/apple-pie.jpg" className="p-2" alt="apple pie"/></td>
                    <td className="border-2 border-black w-[232px] h-[67.6px] pb-8 pl-20">Apple Pie</td>
                    <td className="border-2 border-black w-[340px] h-[67.6px] pb-8 pl-20">Our famous apple pie</td>
                    <td className="border-2 border-black w-[66px] h-[67.6px] pb-8 pl-2">$14.95</td>
                    <td className="border-2 border-black w-[102.47px] h-[67.6px] pb-8 pl-1 text-[16px] font-sans">View Details</td>
                </tr>
                <tr>
                    <td className="w-[87.6px] h-[67.6px] border-2 border-black"><img src="/Images/cranberry-pie.jpg" className="p-2" alt=""/></td>
                    <td className="border-2 border-black w-[232px] h-[67.6px] pb-8 pl-16">Cranberry Pie</td>
                    <td className="border-2 border-black w-[340px] h-[67.6px] pb-8 pl-20">A Christmas favorite</td>
                    <td className="border-2 border-black w-[66px] h-[67.6px] pb-8 pl-2">$18.95</td>
                    <td className="border-2 border-black w-[102px] h-[67.6px] pb-8 pl-1 text-[16px] font-sans">View Details</td>
                </tr>
                <tr>
                    <td className="w-[87.6px] h-[67.6px] border-2 border-black"><img src="/Images/cherry-pie-small.jpg" className="p-2" alt=""/></td>
                    <td className="border-2 border-black w-[232px] h-[67.6px] pb-8 pl-20">Cherry pie</td>
                    <td className="border-2 border-black w-[340px] h-[67.6px] pb-8 pl-20">A summer classic!</td>
                    <td className="border-2 border-black w-[66px] h-[67.6px] pb-8 pl-2">$18.95</td>
                    <td className="border-2 border-black w-[102px] h-[67.6px] pb-8 pl-1 text-[16px] font-sans">View Details</td>
                </tr>
                <tr>
                    <td className="w-[87.6px] h-[67.6px] border-2 border-black"><img src="/Images/peach-pie.jpg" className="p-2" alt=""/></td>
                    <td className="border-2 border-black w-[232px] h-[67.6px] pb-8 pl-20">Peach pie</td>
                    <td className="border-2 border-black w-[340px] h-[67.6px] pb-8 pl-20">Sweet as peach</td>
                    <td className="border-2 border-black w-[66px] h-[67.6px] pb-8 pl-2">$18.95</td>
                    <td className="border-2 border-black w-[102px] h-[67.6px] pb-8 pl-1 text-[16px] font-sans">View Details</td>
                </tr>
                <tr>
                    <td className="w-[87.6px] h-[67.6px] border-2 border-black"><img src="/Images/pumpkin-pie-small.jpg" className="p-2" alt=""/></td>
                    <td className="border-2 border-black w-[232px] h-[67.6px] pb-8 pl-16">Pumpkin pie</td>
                    <td className="border-2 border-black w-[340px] h-[67.6px] pb-8 pl-20">Our Halloween favorite</td>
                    <td className="border-2 border-black w-[66px] h-[67.6px] pb-8 pl-2">$18.95</td>
                    <td className="border-2 border-black w-[102px] h-[67.6px] pb-8 pl-1">View Details</td>
                </tr>
                <tr>
                    <td className="w-[87.6px] h-[67.6px] border-2 border-black"><img src="/Images/christmas-apple-pie.jpg" className="p-2" alt=""/></td>
                    <td className="border-2 border-black w-[232px] h-[67.6px] pb-8 pl-8">Christmas apple pie</td>
                    <td className="border-2 border-black w-[340px] h-[67.6px] pb-8 pl-20">Happy holidays with this pie!</td>
                    <td className="border-2 border-black w-[66px] h-[67.6px] pb-8 pl-2">$19.95</td>
                    <td className="border-2 border-black w-[102px] h-[67.6px] pb-8 pl-1 text-[16px] font-sans">View Details</td>
                </tr>
                <tr>
                    <td className="w-[87.6px] h-[67.6px] border-2 border-black"><img src="/Images/blue-berry-cheesecake-small.jpg" className="p-2" alt=""/></td>
                    <td className="border-2 border-black w-[232px] h-[67.6px] pb-8 pl-8">Blueberry cheese cake</td>
                    <td className="border-2 border-black w-[340px] h-[67.6px] pb-8 pl-20">You'll love it!</td>
                    <td className="border-2 border-black w-[66px] h-[67.6px] pb-8 pl-2">$17.95</td>
                    <td className="border-2 border-black w-[102px] h-[67.6px] pb-8 pl-1 text-[16px] font-sans">View Details</td>
                </tr>
                <tr>
                    <td className="w-[87.6px] h-[67.6px] border-2 border-black"><img src="/Images/chocolate-cheesecake-small.jpg" className="p-2" alt=""/></td>
                    <td className="border-2 border-black w-[232px] h-[67.6px] pl-9 pb-8">Chocolate Cheese Cake</td>
                    <td className="border-2 border-black w-[340px] h-[67.6px] pb-8 pl-20">With extra Belgian chocolate!</td>
                    <td className="border-2 border-black w-[66px] h-[67.6px] pb-8 pl-2">$22.95</td>
                    <td className="border-2 border-black w-[102px] h-[67.6px] pb-8 pl-1 text-[16px] font-sans">View Details</td>
                </tr>
                <tr>
                    <td className="w-[87.6px] h-[67.6px] border-2 border-black"><img src="/Images/rhubarb-pie-small.jpg" className="p-2" alt=""/></td>
                    <td className="border-2 border-black w-[232px] h-[67.6px] pb-8 pl-20">Rhubarb Pie</td>
                    <td className="border-2 border-black w-[340px] h-[67.6px] pb-8 pl-20">My God, so sweet!</td>
                    <td className="border-2 border-black w-[66px] h-[67.6px] pb-8 pl-2">$21.95</td>
                    <td className="border-2 border-black w-[102px] h-[67.6px] pb-8 pl-1 text-[16px] font-sans">View Details</td>
                </tr>
                <tr>
                    <td className="w-[87.6px] h-[67.6px] border-2 border-black"><img src="/Images/strawberry-pie-small.jpg" className="p-2" alt=""/></td>
                    <td className="border-2 border-black w-[232px] h-[67.6px] pb-8 pl-20">Strawberry Pie</td>
                    <td className="border-2 border-black w-[340px] h-[67.6px] pb-8 pl-20">Our delicious strawberry pie!</td>
                    <td className="border-2 border-black w-[66px] h-[67.6px] pb-8 pl-2">$18.95</td>
                    <td className="border-2 border-black w-[102px] h-[67.6px] pb-8 pl-1 text-[16px] font-sans">View Details</td>
                </tr>
                <tr>
                    <td className="w-[87.6px] h-[67.6px] border-2 border-black"><img src="/Images/caramel-popcorn-cheesecake-small.jpg" className="p-2" alt=""/></td>
                    <td className="border-2 border-black w-[232px] h-[67.6px] pb-8 pl-2">Caramel Popcorn Cheese Cake</td>
                    <td className="border-2 border-black w-[340px] h-[67.6px] pb-8 pl-1 text-[16px]">We thought it wouldn't be possible but it worked!</td>
                    <td className="border-2 border-black w-[66px] h-[67.6px] pb-8 pl-2">$22.95	</td>
                    <td className="border-2 border-black w-[102px] h-[67.6px] pb-8 pl-1 text-[16px] font-sans ">View Details</td>
                </tr>
                <tr>
                    <td className="w-[87.6px] h-[67.6px] border-2 border-black"><img src="/Images/pistache-cheesecake-small.jpg" className="p-2" alt=""/></td>
                    <td className="border-2 border-black w-[232px] h-[67.6px] pb-8 pl-10">Pistache Cheese Cake</td>
                    <td className="border-2 border-black w-[340px] h-[67.6px] pb-8 pl-20">Go nuts over this cheesecake</td>
                    <td className="border-2 border-black w-[66px] h-[67.6px] pb-8 pl-2">$19.95</td>
                    <td className="border-2 border-black w-[102px] h-[67.6px] pb-8 pl-1 text-[16px] font-sans">View Details</td>
                </tr>
                <tr>
                    <td className="w-[87.6px] h-[67.6px] border-2 border-black"><img src="/Images/strawberry-cheesecake-small.jpg" className="p-2" alt=""/></td>
                    <td className="border-2 border-black w-[232px] h-[67.6px] pl-9 pb-8">Strawberry Cheese Cake</td>
                    <td className="border-2 border-black w-[340px] h-[67.6px] pb-8 pl-2">One of the best cheese cakes you'll ever find!</td>
                    <td className="border-2 border-black w-[66px] h-[67.6px] pb-8 pl-2">$18.95</td>
                    <td className="border-2 border-black w-[102px] h-[67.6px] pb-8 pl-1 text-[16px] font-sans">View Details</td>
                </tr>
                <tr>
                    <td className="w-[87.6px] h-[67.6px] border-2 border-black"><img src="/Images/pecan-pie-small.jpg" className="p-2" alt=""/></td>
                    <td className="border-2 border-black w-[232px] h-[67.6px] pb-8 pl-20">Pecan Pie</td>
                    <td className="border-2 border-black w-[340px] h-[67.6px] pb-8 pl-24">Simple but good</td>
                    <td className="border-2 border-black w-[66px] h-[67.6px] pb-8 pl-2 ">$14.95</td>
                    <td className="border-2 border-black w-[102px] h-[67.6px] pb-8 pl-1 text-[16px] font-sans">View Details</td>
                </tr>
                <tr>
                    <td className="w-[87.6px] h-[67.6px] border-2 border-black"><img src="/Images/birthday-pie.jpg" className="p-2" alt=""/></td>
                    <td className="border-2 border-black w-[232px] h-[67.6px] pb-8 pl-20">Birthday Pie</td>
                    <td className="border-2 border-black w-[340px] h-[67.6px] pb-8 pl-28">A happy one!</td>
                    <td className="border-2 border-black w-[66px] h-[67.6px] pb-8 pl-2">$25.95</td>
                    <td className="border-2 border-black w-[102px] h-[67.6px] pb-8 pl-1 text-[16px] font-sans">View Details</td>
                </tr>
             </tbody>
            </table>
          </div>  
        </div>
   </>
  )
}

export default Pies