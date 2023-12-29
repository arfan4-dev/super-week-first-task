/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { CiUser } from "react-icons/ci";
const Navbar = () => {

  return (
    <div className="w-full">
      <header className="">
        <nav className="flex justify-between  sm:ml-5 sm:mt-5 md:mb-4 2xl:mt-10 xl:ml-8 md:mx-5 2xl:ml-10">
          <div className="leading-[10px] md:leading-[15px] lg:leading-[22px] 2xl:leading-[30px] relative">
            <p className="uppercase text-[6px] md:text-[8px] lg:text-[10px] 2xl:text-[14px] text-left tracking-[2px] lg:tracking-[4px]">
              
              send files send folders send ideas share transfers in multiple
              formates
            </p>
            <p className="uppercase text-[6px] md:text-[8px] lg:text-[10px] 2xl:text-[14px] text-left tracking-[2px] lg:tracking-[4px]">
              UNLIMITED STORAGE SEND UNLIMITED ON TRANSFERS RECEIVE UNLIMITED ON
              TRANSFERS
            </p>
            <p className="uppercase text-[6px] md:text-[8px] lg:text-[10px] 2xl:text-[14px] text-left tracking-[2px] lg:tracking-[4px]">
              
              STORAGE FOR UP TO 2 YEARS PORTAL CUSTOM EXPIRATION DATES ASSIGN
              PIN PROTECTED
            </p>
            <p className="uppercase text-[6px] md:text-[8px] lg:text-[10px] 2xl:text-[14px] text-left tracking-[2px] lg:tracking-[4px] flex ">
             <span>PUBLIC SHARING DYNAMIC LINKS</span>  <img className="sm:w-[50px] sm:h-[15px] md:w-[70px] md:h-[20px] lg:w-[100px] lg:h-[33px] xl:w-[100px] xl:h-[33px] 2xl:w-[130px] 2xl:h-[50px] 3xl:w-[147px] 3xl:h-[50px] sm:ml-5 sm:mr-2 md:ml-5 md:mr-2  lg:ml-7 lg:mr-3 xl:ml-7 xl:mr-3 2xl:ml-9 2xl:mr-5 self-baseline mt-1 lg:mt-2" src="/assets/ZTFR.png" alt="" />  <span>PASSWORD PROTECTED TRACK DOWNLOADS</span>
            </p>
            <p className="uppercase text-[6px] md:text-[8px] lg:text-[10px] 2xl:text-[14px] text-left tracking-[2px] lg:tracking-[4px] absolute sm:top-[43px]  md:top-[60px] lg:top-[93px]  2xl:top-[130px] left-0">ADVANCED AES 254-BIT ENCRYPTION</p>
          </div>

<div>
<div className="flex items-center gap-x-4 sm:mr-2 md:-mr-2 xl:mr-5 lg:mr-1 2xl:mr-5">
      <CiUser color="#BE9F56" className="text-[16px] 2xl:text-[20px]" />
      <img src="assets/UK.svg" alt="countryLogo" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] 2xl:w-[50px] 2xl:h-[50px]"/>
          </div>
</div>
         
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
