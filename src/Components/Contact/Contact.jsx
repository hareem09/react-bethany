import React from 'react'

function Contact() {
  return (
    <>
    <div className="main1  w-[550px] md:w-[720px] lg:w-[855px] mt-8 ml-12 ">
            <h1 className="w-[479px] sm:w-[550px] md:w-[720px] lg:w-[831px] xl:w-[838px] h-[48px] mb-10 text-[40px] font-sans font-bold text-amber-600">Contact us!</h1>
            <fieldset className="border-2 border-amber-700 w-[479px] sm:w-[516px] md:w-[696px] lg:w-[831px] xl:w-[966px]  rounded-lg p-4">
                <legend className="text-[24px] font-sans">YOUR INFORMATION</legend>
                <form className="flex flex-col px-[6px] py-3 font-sans">
                  <div className="mb-3 w-[479px] sm:w-[516px] md:w-[659px] lg:w-[794px] xl:w-[929.9px] h-[72.8px]"> 
                    <label className="text-[16px]" htmlFor="first-name">FIRST NAME</label>
                    <input type="text" placeholder="Enter your first name" name="first-name" id="first-name" className="border-2 border-slate-400 w-[479px] sm:w-[516px] md:w-[659px] lg:w-[794px] xl:w-[929.2px] h-[40.8px] py-3 px-[6px] rounded-lg"/>
                  </div> 
                  <div className="mb-3 w-[479px] sm:w-[516px] md:w-[659px] lg:w-[794px] xl:w-[929.9px] h-[72.8px]">
                    <label className="text-[16px]" htmlFor="last-name">LAST NAME</label>
                    <input type="text" placeholder="Enter your last name" name="last-name" id="last-name" className="border-2 border-slate-400 w-[479px] sm:w-[516px] md:w-[659px] lg:w-[794px] xl:w-[929.2px] h-[40.8px] py-3 px-[6px] rounded-lg"/>
                  </div>
                    <div className="mb-3 w-[479px] sm:w-[516px] md:w-[659px] lg:w-[794px] xl:w-[929.9px] h-[72.8px]">
                        <label className="text-[16px]" for="country">COUNTRY</label>
                        <select id="country" name="country" className="border-2 border-slate-400 w-[479px] sm:w-[516px] md:w-[659px] lg:w-[794px] xl:w-[929.2px] h-[40.8px] py-[6px] pr-[36px] pl-3 rounded-lg">
                            <option value="USA">USA</option>
                            <option value="CHINA">CHINA</option>
                            <option value="DUBAI">DUBAI</option>
                            <option value="ENGLAND">ENGLAND</option>
                        </select>
                    </div>
                
                    <div className="mb-3 w-[479px] sm:w-[516px] md:w-[659px] lg:w-[794px] xl:w-[929.9px] h-[72.8px]">
                        <label for="birthdaytime">BIRTHDAY</label>
                        <input type="datetime-local" id="birthdaytime" name="birthdaytime" className="border-2 border-slate-400 w-[479px] sm:w-[516px] md:w-[659px] lg:w-[794px] xl:w-[929.2px] h-[40.8px] py-[6px] pr-[36px] pl-3 rounded-lg"/>
                    </div>
                    <div className="mb-3 w-[479px] sm:w-[516px] md:w-[659px] lg:w-[794px] xl:w-[929.9px] h-[72.8px]">
                     <label for="email" className="text-[16px]">EMAIL</label>
                     <input type="email" name="email" id="EMAIL" className="border-2 border-slate-400 w-[479px] sm:w-[516px] md:w-[659px] lg:w-[794px] xl:w-[929.2px] h-[40.8px] py-[6px] pr-[36px] pl-3 rounded-lg"/>
                    </div>
                </form>                
            </fieldset>
            <fieldset className="border-2 border-amber-700 w-[479px] sm:w-[516px] md:w-[696px] lg:w-[831px] xl:w-[966px] h-[365.2px] rounded-lg mt-5 p-4">
                <legend className="text-[24px] font-sans mb-2">THE REASON YOU ARE CONTACTING US</legend>
                <form>
                    <div className= "w-[479px] sm:w-[516px] md:w-[659px] lg:w-[794px] xl:w-[929.2px] h-[270.8px] text-[16px] font-sans mb-4">
                        <label htmlFor="form-label" class="mb-2">I HAVE A</label>
                    
                      <div className="w-[479px] sm:w-[516px] md:w-[659px] lg:w-[794px] xl:w-[929px] h-[24px] mb-[2px] pl-6">
                        <input type="radio" name="check" id="check" value="option1" className="mt-1 ml-6 w-[16px] h-[16px] bg-cyan-400 mr-1"/>
                        <label for="form-label">QUESTION</label>
                      </div>
                      <div className="w-[479px] sm:w-[516px] md:w-[659px] lg:w-[794px] xl:w-[929px] h-[24px] mb-[2px] pl-6">
                        <input type="radio" name="check" id="check" value="option2" className="mt-1 ml-6 w-[16px] h-[16px] bg-cyan-400 mr-1"/>
                        <label for="form-label" className="w-[68.46px] h-[24px]">REMARK</label>
                      </div>
                      <div className="w-[479px] sm:w-[516px] md:w-[659px] lg:w-[794px] xl:w-[929px] h-[24px] mb-[2px] pl-6">
                        <input type="radio" name="check" id="check" value="option3" className="mt-1 ml-6 w-[16px] h-[16px] bg-cyan-400 mr-1"/>
                        <label for="form-label" class="w-[231.45px] h-[24px]">COMPLAINT YOUR QUESTION</label>
                      </div>
                      <textarea name="write" id="" cols="40" rows="6" className="w-[479px] sm:w-[516px] md:w-[659px] lg:w-[794px] xl:w-[929.9px] h-[160.8px] border-2 border-slate-400 py-[12px] px-[6px] rounded-lg">Write your text here</textarea>
                    </div>
                </form>
            </fieldset>
            <div className="w-[479px] sm:w-[516px] md:w-[696px] lg:w-[831px] xl:w-[966px] h-[64px]">
                <button className="mt-5 bg-amber-600 w-[100px] h-[44px]">
                    <b className="w-[61px] h-[17px] p-[10px] text-white">SUBMIT</b>
                </button>
            </div>
            </div>
    </>
  )
}

export default Contact