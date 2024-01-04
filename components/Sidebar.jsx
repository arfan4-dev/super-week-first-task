/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firbase";
import toast from "react-hot-toast";
import Drawer from "react-modern-drawer";
import { RxCross1 } from "react-icons/rx";
import {
  IoIosArrowUp,
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowDown,
} from "react-icons/io";
import "react-modern-drawer/dist/index.css";
import { CiUser } from "react-icons/ci";
import Navbar from "@/components/Navbar";
import Marquee from "react-fast-marquee";
const Sidebar = () => {
  const [position, setPosition] = useState(480);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) =>
        (prevPosition == -550 ?300 : prevPosition - 1)
      );
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  let imagesTwo = ["/assets/1.png", "/assets/2.png", "/assets/5.png"];

 

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(true);
  };
  return (
    <div>
      {/* <button onClick={toggleDrawer}>open</button> */}
      <Drawer
        open={isDrawerOpen}
        overlayColor="#000"
        enableOverlay={true}
        onClose={toggleDrawer}
        direction="right"
        className=""
      >
        {isDrawerOpen && (
          <nav
            className={`absolute top-0 right-0  bg-[#1A1A1A] p-5 sm:w-[490px] md:w-[490px] md:h-[520px] lg:w-[580px] xl:w-[610px] 2xl:w-[960px] 3xl:w-[980px] sm:min-h-[100vh]`}
          >
            <div className="flex ">
              <div className="flex  items-start gap-x-10 3xl:mt-5">
                <div className="flex flex-col items-start  ">
                  <div
                    className={`flex flex-col items-start gap-x-10 hover:cursor-pointer `}
                  >
                    <div className="flex items-center gap-x-10">
                      <RxCross1
                        color="white"
                        className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] "
                        onClick={() => {
                          setIsDrawerOpen(false);
                        }}
                      />
                      <p className="text-white text-[10px] lg:text-[14px] tracking-[2px]">
                        MENU
                      </p>
                    </div>

                        <div className="marquee-container">
                        {imagesTwo.map((image, index) => (
                      <div key={index} className="marquee-content" style={{ transform: `translateY(${position}%)` }}>
                        <img
                          src={image}
                          alt={`Slide ${index + 1}`}
                          className="sm:w-[94px] sm:h-[100px] mt-5 mb-3 lg:h-[120px] lg:w-[112px]  2xl:w-[200px] 2xl:h-[200px]"
                        />
                      </div>
                    ))}
                        </div>
                   
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-x-10 sm:gap-y-6 md:gap-y-[22px] lg:gap-y-10 xl:gap-y-3 sm:-ml-5 md:ml-0  2xl:gap-y-0 3xl:gap-y-0">
                <img
                  src="/assets/ZITRANSFER_White.png"
                  className="sm:w-[120px]   lg:w-[150px] 2xl:w-[233px] 2xl:h-[20px] xl:w-[150px]  xl:h-[15px] sm:mt-5 md:mt-3 sm:ml-14 lg:mt-6 xl:mt-5 2xl:mt-10 3xl:mt-[70px] md:ml-6 lg:ml-5 2xl:ml-14 2xl:mb-[60px]"
                  alt="ZITRANSFER"
                />
                <img
                  src="/assets/3.png"
                  alt=""
                  className="sm:w-[170px] sm:h-[175px]  lg:w-[250px] lg:h-[230px] xl:w-[250px] xl:h-[230px] 2xl:w-[380px] 2xl:h-[380px] 3xl:w-[400px] 3xl:h-[400px] md:mb-0  sm:mb-1 sm:ml-12 md:mt-2 lg:ml-5 xl:ml-8  2xl:mx-14  rounded-[20px]"
                />

                <div className="flex 2xl:mt-5 3xl:mt-10 self-start">
                  <div className="flex flex-col gap-y-5 sm:ml-9 sm:mt-14 md:mt-12  sm:mx-1 lg:mr-2 md:ml-3 2xl:mx-2 3xl:mx-5  xl:mx-[6px] mr-2 xl:mt-14 3xl:mr-3   2xl:mt-[130px]">
                    <IoIosArrowUp
                      color="#777777"
                      className="w-[10px] h-[10px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px]"
                    />
                    <IoIosArrowDown
                      className="w-[10px] h-[10px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px]"
                      color="#777777"
                    />
                  </div>

                  <img
                    src="/assets/6.png"
                    className="sm:w-[150px] sm:h-[100px] lg:w-[200px] lg:h-[120px] 2xl:w-[334px] 2xl:h-[200px]"
                    alt="6"
                  />
                </div>
              </div>

              <div className="flex flex-col items-end mt-14 mb-5 gap-x-4 ">
                <div className="flex items-center  gap-x-4 sm:ml-11 sm:-mt-[38px] sm:mb-2  xl:ml-36 2xl:ml-40 3xl:ml-28 2xl:mr-5 3xl:mr-10  3xl:-mt-3 md:-mt-[50px] lg:-mt-10 xl:-mt-11 xl:mb-2 2xl:-mt-8 2xl:mb-5 3xl:mb-5">
                  <CiUser
                    color="white"
                    className="sm:text-[20px] md:text-[16px] 2xl:text-[25px]"
                  />
                  <img
                    src="assets/UK.svg"
                    alt="countryLogo"
                    className="sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] 2xl:w-[50px] 2xl:h-[50px]"
                  />
                </div>

                <div className="leading-[25px] md:leading-[26px] lg:leading-[36px] xl:leading-[30px] 2xl:leading-[53px] 3xl:leading-[62px] 2xl:mr-5 3xl:mr-10   tracking-[2px]">
                  <p className="text-right text-[7px] md:text-[10px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px] tracking-[4px] text-white">
                    FEATURES
                  </p>
                  <p className="text-right text-[7px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px] text-white tracking-[4px]">
                    PRODUCTS
                  </p>
                  <p className="text-right text-[7px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px] text-white tracking-[4px]">
                    HOW TO <span className="text-[#474646]">ZTFR</span>{" "}
                  </p>
                  <p className="text-right text-[7px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px] text-white tracking-[4px]">
                    PRODUCTS
                  </p>
                  <p className="text-right text-[7px] md:text-[8px] lg:text-[10px]  xl:text-[12px] 2xl:text-[16px] text-white tracking-[4px]">
                    ADVERTISING
                  </p>
                  <p className="text-right text-[7px] md:text-[8px] lg:text-[10px]  xl:text-[12px] 2xl:text-[16px] text-white tracking-[4px]">
                    COMPANY
                  </p>
                  <p className="text-right text-[7px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px] text-white tracking-[4px]">
                    MY ACCOUNT
                  </p>
                  <p className="text-right text-[7px] md:text-[8px] lg:text-[10px]  xl:text-[12px] 2xl:text-[16px] text-white tracking-[4px] 2xl:mb-5 3xl:mb-0">
                    NEWSROOM/PRESS
                  </p>
                </div>

                <div className="mt-5 self-center 2xl:mr-5 3xl:mr-10">
                  <img
                    src="/assets/67.png"
                    className="sm:w-[160px] sm:h-[80px] lg:w-[170px] lg:h-[90px] xl:w-[190px] xl:h-[90px] 2xl:w-[290px] 2xl:h-[160px] 3xl:w-[260px] 3xl:h-[160px]  "
                    alt=""
                  />
                  <div className="flex gap-x-5 justify-end sm:my-1 lg:mt-1 xl:mt-1 2xl:mt-4">
                    <IoIosArrowBack
                      color="#777777"
                      className="sm:w-[10px] sm:h-[10px] md:w-[10px] md:h-[10px] lg:w-[18px] lg:h-[18px]  xl:w-[20px] xl:h-[20px]"
                    />
                    <IoIosArrowForward
                      className="sm:w-[10px] sm:h-[10px] md:w-[10px] md:h-[10px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px]"
                      color="#777777"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex items-center justify-between sm:-mt-2 md:-mt-3 lg:mt-2 xl:-mt-5 2xl:-mt-3 3xl:mt-2">
              <Marquee>
                <img
                  src="/assets/8.png"
                  alt=""
                  className="sm:w-[94px] mx-3 sm:h-[100px] lg:h-[120px] lg:w-[112px] 2xl:w-[200px] 2xl:h-[200px]"
                />
                <img
                  src="/assets/9.png"
                  alt=""
                  className="sm:w-[94px] mx-3 sm:h-[100px] lg:h-[120px] lg:w-[112px] 2xl:w-[200px] 2xl:h-[200px]"
                />
                <img
                  src="/assets/11.png"
                  alt=""
                  className="sm:w-[94px] mx-3 sm:h-[100px] lg:h-[120px] lg:w-[112px] 2xl:w-[200px] 2xl:h-[200px]"
                />
                <img
                  src="/assets/10.png"
                  alt=""
                  className="sm:w-[94px] mx-3 sm:h-[100px] lg:h-[120px] lg:w-[112px] 2xl:w-[200px] 2xl:h-[200px]"
                />
              </Marquee>
            </div>

            <div className="relative flex justify-between items-center sm:mt-2 lg:mt-5 xl:mt-2 2xl:mt-5 3xl:mt-8">
              <p className="text-[#2E2E2E] tracking-[2px] lg:tracking-[4px] 2xl:tracking-[5px] text-[10px] lg:text-[13px] xl:text-[12px] 2xl:text-[22px] sm:ml-5 lg:ml-4 xl:ml-5 2xl:ml-9">
                FOUNDATION
              </p>
              <p className="text-white opacity-50 tracking-[2px] text-[8px]  lg:text-[10px]  2xl:text-[16px] lg:tracking-[5px]">
                TERMS | PRIVACY
              </p>

              <div className="flex items-center gap-x-2 xl:gap-x-2 2xl:gap-x-[14px] xl:mr-3 2xl:mr-5 ">
                <img
                  src="/assets/YT.svg"
                  className="opacity-50 w-[8px] h-[8px] lg:w-[15px] lg:h-[13px]   xl:w-[15px] xl:h-[13px] 2xl:w-[26px] 2xl:h-[18px]"
                  alt=""
                />
                <img
                  src="/assets/V.svg"
                  alt=""
                  className="w-[8px] h-[8px] lg:w-[15px] lg:h-[13px]  xl:w-[15px] xl:h-[13px] 2xl:w-[21px] 2xl:h-[18px] opacity-50"
                />
                <img
                  src="/assets/X.svg"
                  alt=""
                  className="w-[8px] h-[8px] lg:w-[15px] lg:h-[13px]   xl:w-[13px] xl:h-[13px] 2xl:w-[18px] 2xl:h-[18px] opacity-50"
                />
                <img
                  src="/assets/f.svg"
                  alt=""
                  className=" w-[8px] h-[10px] lg:w-[15px] lg:h-[13px]   xl:w-[10px] xl:h-[13px] 2xl:w-[10px] 2xl:h-[18px] opacity-50"
                />
                <img
                  src="/assets/insta.svg"
                  alt=""
                  className="w-[8px] h-[10px] lg:w-[15px] lg:h-[13px]   xl:w-[15px] xl:h-[13px] 2xl:w-[18px] 2xl:h-[18px] opacity-50"
                />
                <img
                  src="/assets/Tiktok.svg"
                  alt=""
                  className="w-[8px] h-[10px] lg:w-[15px] lg:h-[13px]   xl:w-[15px] xl:h-[13px] 2xl:w-[16px] 2xl:h-[18px] opacity-50"
                />
                <img
                  src="/assets/O.svg"
                  alt=""
                  className="w-[8px] h-[10px] lg:w-[15px] lg:h-[13px]   xl:w-[15px] xl:h-[13px] 2xl:w-[18px] 2xl:h-[18px]  opacity-50"
                />
              </div>
            </div>
          </nav>
        )}
      </Drawer>
    </div>
  );
};

export default Sidebar;
