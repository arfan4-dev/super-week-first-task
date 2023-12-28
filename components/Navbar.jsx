/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { CiUser } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="w-full">
      <header className="">
        <nav className="flex justify-between p-3 md:p-5 md:mx-10">
          <div className="leading-[10px] md:leading-0 lg:leading-[22px] 2xl:leading-[30px] relative">
            <p className="uppercase text-[6px] md:text-[8px] lg:text-[10px] 2xl:text-[14px] text-left tracking-[2px]">
              
              send files send folders send ideas share transfers in multiple
              formates
            </p>
            <p className="uppercase text-[6px] md:text-[8px] lg:text-[10px] 2xl:text-[14px] text-left tracking-[2px]">
              UNLIMITED STORAGE SEND UNLIMITED ON TRANSFERS RECEIVE UNLIMITED ON
              TRANSFERS
            </p>
            <p className="uppercase text-[6px] md:text-[8px] lg:text-[10px] 2xl:text-[14px] text-left tracking-[2px]">
              
              STORAGE FOR UP TO 2 YEARS PORTAL CUSTOM EXPIRATION DATES ASSIGN
              PIN PROTECTED
            </p>
            <p className="uppercase text-[6px] md:text-[8px] lg:text-[10px] 2xl:text-[14px] text-left tracking-[2px] flex ">
             <span>PUBLIC SHARING DYNAMIC LINKS</span>  <img className="w-[80px] h-[18px] md:w-[100px] md:h-[23px] lg:w-[130px] lg:h-[33px] 2xl:w-[147px] 2xl:h-[50px] sm:ml-5 sm:mr-2 md:ml-5 md:mr-2  lg:ml-6 lg:mr-3 2xl:ml-10 2xl:mr-5 self-baseline mt-2" src="/assets/ZTFR.png" alt="" />  <span>PASSWORD PROTECTED TRACK DOWNLOADS</span>
            </p>
            <p className="uppercase text-[6px] md:text-[8px] lg:text-[10px] 2xl:text-[14px] text-left tracking-[2px] absolute sm:top-[50px]  md:top-[60px] lg:top-[93px]  2xl:top-[130px] left-0">ADVANCED AES 254-BIT ENCRYPTION</p>
          </div>

<div>
<div className="flex items-center gap-x-4">
      <CiUser color="#BE9F56" className="text-[16px] 2xl:text-[20px]"/>
      <img src="assets/UK.svg" alt="countryLogo" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] 2xl:w-[50px] 2xl:h-[50px]"/>
          </div>
</div>
         
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
