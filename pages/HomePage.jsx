/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { auth } from "@/firbase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { FaLock } from "react-icons/fa";
import Drawer from "react-modern-drawer";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import 'react-modern-drawer/dist/index.css'
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const route=useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // toast.success('Logout Successful');
      route.push('/Form'); 
    } catch (error) {
      console.error('Error logging out', error);
      toast.error('Logout Error');
    }
  };



  const rightArr = ["/assets/ZimoLogo.svg", "MORE"];
  const [RcurrentIndex, setRCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRCurrentIndex((prevIndex) => (prevIndex + 1) % rightArr.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [RcurrentIndex, rightArr.length]);

 
  return (
    <div className="flex flex-col justify-between sm:h-[500px]  md:h-[510px] lg:h-[625px] xl:h-[600px] 2xl:h-[1020px] 3xl:h-[1080px]">
      <nav className="w-full ">
        <ul className="flex justify-between m-5 xl:m-10">
          <li className="flex">
            <img
              className="w-[40px] h-[30px]  xl:w-[65px] xl:h-[34px] 2xl:w-[147px] 2xl:h-[50px] "
              src="/assets/ZITRAFER.svg"
              alt=""
            />
          </li>
          <li>
            <div className="flex items-center gap-x-4">
              <CiUser color="#BE9F56" className="text-[16px] 2xl:text-[30px] cursor-pointer" onClick={handleLogout} />
              <img
                src="assets/UK.svg"
                alt="countryLogo"
                className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] 2xl:w-[50px] 2xl:h-[50px] "
              />
            </div>
          </li>
        </ul>
      </nav>

      {/* Content */}

      <div className="flex justify-between items-center ">
        <div className="bg-black relative sm:w-[40px]  md:w-[50px] sm:h-[200px] lg:w-[80px] lg:h-[300px] xl:w-[60px] xl:h-[300px] 2xl:w-[137px] 2xl:h-[450px] 3xl:w-[157px] 3xl:h-[489px] rounded-tr-[20px] rounded-br-[20px]">
          <FaLock
            className="absolute top-2 right-2 lg:top-4 lg:right-4 w-[12px] h-[15px]"
            color="white"
          />
        </div>
        <div></div>
        <div className=" flex flex-col items-center ">
          <p className="tracking-[3px]  xl:tracking-[5px] text-[20px] lg:text-[30px] xl:text-[25px] 2xl:text-[50px] ml-9 lg:ml-12">
            LET`S DO
          </p>
          <p className="text-[50px] tracking-[15px] lg:text-[70px] lg:tracking-[15px] xl:text-[80px] 2xl:text-[120px] xl:font-bold xl:tracking-[20px]">
            THIS
          </p>
          <p className="text-[6px] md:text-[8px] xl:text-[12px] tracking-[2px] text-center">
            UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS WINDOW
          </p>
        </div>
        <Drawer
            open={isOpen}
            overlayColor="#000"
            enableOverlay={true}
            onClose={toggleDrawer}
            direction="right"
            className=""
          >
            {isOpen && (
              <nav
                className={`absolute top-0 right-0 bg-[#1A1A1A] w-[450px] h-[640px] p-5  md:h-[510px] md:w-[450px] lg:h-[690px] lg:w-[550px] xl:w-[610px] xl:h-[610px] 2xl:w-[960px] 2xl:h-[1025px] 3xl:h-[1080px]`}
              >
                <div className="flex  items-start gap-x-10">
                  <div className="flex flex-col items-start sm:gap-y-0 md:gap-y-0 lg:gap-y-0  xl:gap-y-0 2xl:gap-y-0 ">
                    <div
                      className={`flex items-center gap-x-10 hover:cursor-pointer `}
                    >
                      <RxCross1
                        color="white"
                        className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      />
                      <p className="text-white text-[10px] lg:text-[14px] tracking-[2px]">
                        MENU
                      </p>
                    </div>
                    <img
                      src="/assets/1.png"
                      className="sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] xl:w-[120px] xl:h-[120px] 2xl:w-[180px] 2xl:h-[180px] 3xl:w-[200px] 3xl:h-[200px] sm:mt-3 sm:mb-3 md:mt-2 md:mb-2 lg:mt-5 lg:mb-5 xl:mt-3 xl:mb-3  2xl:mt-10 2xl:mb-10"
                      alt="1"
                    />
                    <img
                      src="/assets/2.png"
                      className="sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] xl:w-[120px] xl:h-[120px] 2xl:w-[180px] 2xl:h-[180px] 3xl:w-[200px] 3xl:h-[200px]"
                      alt="2"
                    />
                  </div>

                  <div   className="flex flex-col items-center sm:gap-y-6 md:gap-y-6 lg:gap-y-5 xl:gap-y-3  2xl:gap-y-1 3xl:gap-y-2">
                    <img
                      src="/assets/ZITRANSFER_White.png"
                      className=" lg:w-[230px] 2xl:w-[253px] xl:w-[150px]  xl:h-[15px] sm:mt-10 lg:mt-6 xl:mt-5 2xl:mt-6 3xl:mt-10 2xl:ml-14 2xl:mb-10"
                      alt="ZITRANSFER"
                    />
                    <img
                      src="/assets/3.png"
                      alt=""
                      className="sm:w-[250px] sm:h-[155px] lg:w-[320px] lg:h-[230px] xl:w-[250px] xl:h-[230px] 2xl:w-[380px] 2xl:h-[380px] 3xl:w-[400px] 3xl:h-[400px]  xl:ml-0 2xl:ml-5  rounded-[20px]"
                    />
                  </div>

                  <div className="flex flex-col  mt-8 gap-x-4 ">
                    <div className="flex items-center  gap-x-4 sm:ml-16  lg:ml-24 xl:ml-28 2xl:ml-36 3xl:ml-28 2xl:mb-5">
                    <CiUser color="white" className="text-[16px] 2xl:text-[20px]" />
              <img
                src="assets/UK.svg"
                alt="countryLogo"
                className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] 2xl:w-[50px] 2xl:h-[50px]"
              />
              
                    </div>
              
             <div className="leading-[22px] lg:leading-[32px] xl:leading-[28px] 2xl:leading-[50px] 3xl:leading-[55px]  tracking-[2px]">
             <p className="text-right text-[10px] lg:text-[14px] xl:text-[16px] tracking-[2px] text-white">FEATURES</p>
              <p className="text-right text-[10px] lg:text-[14px] xl:text-[16px] text-white tracking-[2px]">PRODUCTS</p>
              <p className="text-right text-[10px] lg:text-[14px] xl:text-[16px] text-white tracking-[2px]">HOW TO <span className="text-[#474646]">ZTFR</span> </p>
              <p className="text-right text-[10px] lg:text-[14px] xl:text-[16px] text-white tracking-[2px]">PRODUCTS</p>
              <p className="text-right text-[10px] lg:text-[14px]  xl:text-[16px] text-white tracking-[2px]">ADVERTISING</p>
              <p className="text-right text-[10px] lg:text-[14px]  xl:text-[16px] text-white tracking-[2px]">COMPANY</p>
              <p className="text-right text-[10px] lg:text-[14px]  xl:text-[16px] text-white tracking-[2px]">MY ACCOUNT</p>
              <p className="text-right text-[10px] lg:text-[14px]  xl:text-[16px] text-white tracking-[2px]">NEWSROOM/PRESS</p>
             </div>

            </div>
                </div>
               

                <div className="flex sm:mt-3 md:mt-3 lg:mt-0 xl:mt-3 2xl:mt-0 3xl:-mt-0">
                  <img src="/assets/5.png"  className="sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] 2xl:w-[200px] 2xl:h-[200px]"  alt="5" />
                  <div className="flex flex-col gap-y-5  sm:mx-1 lg:mr-2 2xl:mx-2 3xl:mx-5  xl:mx-1 mr-2 xl:mt-14 3xl:mr-3   2xl:mt-32"> 

                  <IoIosArrowUp color='#777777' className="w-[10px] h-[10px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px]" />
                  <IoIosArrowDown className="w-[10px] h-[10px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px]" color='#777777' />

                  </div>
                  
                  <img src="/assets/6.png" className="sm:w-[140px] sm:h-[100px] lg:w-[180px] lg:h-[120px] 2xl:w-[334px] 2xl:h-[200px]" alt="6" />
                  <div>
                  <img src="/assets/67.png" className="lg:w-[250px] lg:h-[90px] xl:w-[200px] xl:h-[110px] 2xl:w-[250px] 2xl:h-[160px] 3xl:w-[260px] 3xl:h-[160px] sm:ml-2 sm:mt-2 lg:mt-5 xl:ml-8  xl:mt-2   2xl:mt-7 2xl:ml-16" alt="" />
                  <div className="flex gap-x-5 justify-end sm:my-1 lg:mt-1 xl:mt-1 2xl:mt-4"> 
                  <IoIosArrowBack color='#777777' className="sm:w-[15px] sm:h-[15px] md:w-[18px] md:h-[18px] xl:w-[20px] xl:h-[20px]"/>
                  <IoIosArrowForward className="sm:w-[15px] sm:h-[15px] md:w-[18px] md:h-[18px] xl:w-[20px] xl:h-[20px]" color='#777777' />

                  </div>
                  </div>
                </div>

                        {/* <div className="flex items-center gap-x-3 absolute 3xl:left-56 3xl:bottom-[58px]">
                          <FaLock color="black" size={10}/>
                          <p className="text-[8px] tracking-[1.7px]"> ZITRANSFER USES ADVANCED ENCRIPTION STANDARD (AES) 256-BIT TO PROTECT THE CONFIDENTIALITY OF THE DATA YOU UPLOAD. </p>
                        </div> */}
                <div className="flex items-center justify-between sm:-mt-1 md:mt-0 lg:-mt-1 xl:-mt-1 2xl:mt-2 3xl:mt-0">
                  <img src="/assets/8.png" className="sm:w-[90px] sm:h-[90px] lg:h-[120px] lg:w-[120px]  2xl:w-[200px] 2xl:h-[200px]" alt="" />
                  <img src="/assets/9.png" alt="" className="sm:w-[90px] sm:h-[90px] lg:h-[120px] lg:w-[120px] 2xl:w-[200px] 2xl:h-[200px]"/>
                  <img src="/assets/11.png" alt="" className="sm:w-[90px] sm:h-[90px] lg:h-[120px] lg:w-[120px] 2xl:w-[200px] 2xl:h-[200px]"/>
                  <img src="/assets/10.png" alt="" className="sm:w-[90px] sm:h-[90px] lg:h-[120px] lg:w-[120px] 2xl:w-[200px] 2xl:h-[200px]"/>
                </div>
                
                <div className="relative flex justify-between items-center sm:mt-3 lg:mt-2 xl:mt-1 2xl:mt-2 3xl:mt-5">
                  <p className='text-[#2E2E2E] tracking-[4px] text-[10px] lg:text-[14px] xl:text-[18px] 2xl:text-[22px] lg:ml-3 xl:ml-8'>FOUNDATION</p>
                   <p className='text-white opacity-50 tracking-[2px] text-[8px]  lg:text-[10px] 2xl:text-[18px] lg:tracking-[4px]'>TERMS | PRIVACY</p>

                   <div className="flex items-center gap-x-2 xl:gap-x-3 2xl:gap-x-3 ">
                    <img src="/assets/YT.svg" className='opacity-50 w-[10px] h-[10px] lg:w-[18px] lg:h-[14px]  xl:w-[15px] xl:h-[13px]' alt="" />
                    <img src="/assets/V.svg" alt="" className='w-[10px] h-[10px] lg:w-[18px] lg:h-[14px]  xl:w-[15px] xl:h-[13px] opacity-50'/>
                    <img src="/assets/X.svg" alt="" className='w-[10px] h-[10px] lg:w-[18px] lg:h-[14px]  xl:w-[15px] xl:h-[13px] opacity-50'/>
                    <img src="/assets/f.svg" alt="" className=' w-[10px] h-[10px] lg:w-[12px] lg:h-[14px]  xl:w-[15px] xl:h-[13px] opacity-50'/>
                    <img src="/assets/insta.svg" alt="" className='w-[10px] h-[10px] lg:w-[14px] lg:h-[14px]  xl:w-[15px] xl:h-[13px] opacity-50'/>
                    <img src="/assets/Tiktok.svg" alt="" className='w-[10px] h-[10px] lg:w-[18px] lg:h-[14px]  xl:w-[15px] xl:h-[13px] opacity-50'/>
                    <img src="/assets/O.svg" alt=""className='w-[10px] h-[10px] lg:w-[18px] lg:h-[14px]  xl:w-[15px] xl:h-[13px]  opacity-50' />
                   </div>
                  </div>
              </nav>
            )}
          </Drawer>
       
          <>
            {RcurrentIndex === 1 ? (
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="  cursor-pointer sm:w-[30px] sm:h-[150px] lg:w-[30px] lg:h-[180px] 2xl:w-[50px] 2xl:h-[213px] bg-black rounded-tl-[15px] rounded-bl-[10px]"
              >
                <p
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white text-[18px] 2xl:text-[26px] tracking-[4px] sm:mt-[80px] lg:mt-[95px] xl:ml-1  2xl:mt-[108px] cursor-pointer   -rotate-90"
                >
                  MENU
                </p>
              </div>
            ) : (
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center cursor-pointer sm:w-[30px] sm:h-[150px] lg:w-[30px] lg:h-[180px] 2xl:w-[50px] 2xl:h-[213px] bg-black rounded-tl-[15px] rounded-bl-[10px]"
              >
                <img
                  onClick={() => setIsOpen(!isOpen)}
                  src={rightArr[RcurrentIndex]}
                  alt="Background Image"
                  className=" sm:w-[20px] sm:h-[70px] 2xl:w-[23px] 2xl:h-[90px] cursor-pointer  sm:ml-1 sm:mt-0  xl:ml-2 2xl:ml-3"
                />{" "}
              </div>
            )}
          </>
        {/* )} */}
      </div>

      <footer className="leading-[10px] lg:leading-[15px] xl:leading-[20px] 2xl:leading-[30px]  2xl:mt-0">
        <p className="text-[#BE9F56]  text-[6px] lg:text-[8px] 2xl:text-[10px] tracking-[2px] ml-5 sm:mb-1 lg:mb-0  xl:ml-10">&copy; ZTRANSFER 2023 </p>
          <div className="flex justify-between items-center ml-5 sm:mr-5 md:mr-0 xl:ml-10">
          <div className=" flex items-center ">
        <span className="text-[#BE9F56] text-[6px] lg:text-[8px] xl:text-[8px] 2xl:text-[10px] tracking-[2px] ">ALL RIGHTS RESERVED</span>
        <span className="text-[#BE9F56] text-[6px] lg:text-[8px] xl:text-[8px] 2xl:text-[10px] tracking-[2px] md:mr-10 lg:mr-0 ml-10 xl:ml-10">ZITRANFER IS THE PART OF ZIMO GROUP</span>
        </div>
            

        <p className="text-[#BE9F56] text-[6px] lg:text-[8px] xl:text-[8px] 2xl:text-[10px] tracking-[2px] sm:ml-6 sm:mr-0 md:ml-5 lg:mr-5 xl:mr-5 2xl:mr-10">ZITRANSFER USES ADVANCED ENCRIPTION STANDARD (AES) 256-BIT TO PROTECT THE CONFIDENTIALITY OF THE DATA YOU UPLOAD.</p>
    
          </div>
       </footer>
    </div>
  );
};

export default HomePage;
