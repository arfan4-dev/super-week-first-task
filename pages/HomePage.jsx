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
    <div className="overflow-hidden flex flex-col justify-between h-[100vh]">
      <nav className="w-full ">
        <ul className="flex justify-between  sm:mt-5  xl:mt-10">
          <li className="flex  sm:ml-5 lg:ml-10 2xl:ml-10">
            <img
              className="w-[40px] h-[30px]   lg:w-[65px] lg:h-[34px] 2xl:w-[147px] 2xl:h-[50px] "
              src="/assets/ZITRAFER.svg"
              alt=""
            />
          </li>
          <li>
            <div className="flex items-center gap-x-4 sm:mr-5 lg:mr-8 2xl:mr-10">
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
            className="absolute top-2 right-2 lg:top-4 lg:right-4 w-[9px] h-[10px] lg:w-[12px] lg:h-[15px]"
            color="white"
          />
          <p className="uppercase rotate-90  absolute sm:top-52 sm:-left-[154px] md:-left-[144px]  lg:-left-[110px] xl:-left-[130px]  2xl:-left-[50px]  3xl:-left-8 text-[4px] lg:text-[6px]  2xl:text-[10px] w-[400px] tracking-[1px]">advanced ecryption standard(aes) 256 bit</p>
          <div className="flex flex-col justify-center items-center sm:w-[30px] md:w-[40px] sm:h-[85px] lg:w-[67px] lg:h-[200px] xl:w-[50px] 2xl:w-[127px] 2xl:h-[430px] 3xl:w-[147px] 3xl:h-[450px]">
  <p className='text-white   -rotate-90 sm:w-[280px] lg:w-[330px] 2xl:w-[360px] text-[6px] lg:text-[8px] 2xl:text-[14px] tracking-[1px]'>UPLOAD FILES OR FOLDERS BY DROPPING </p>
  <p className='text-white ml-5 lg:ml-8 2xl:ml-12   -rotate-90 w-[240px] lg:w-[270px] text-[6px] lg:text-[8px] 2xl:text-[14px] tracking-[1px]'>THEM ANYWHERE IN THIS WINDOW</p>
</div>

        </div>
        <div></div>
        <div className=" flex flex-col items-center   relative">
          {/* <p className="tracking-[3px] self-end  xl:tracking-[5px] 2xl:tracking-[13px] text-[20px] lg:text-[30px] xl:text-[25px] 2xl:text-[50px] lg:-ml-40  2xl:ml-12 xl:mr-5 ">
            LET`S DO
          </p> */}
          <p className="tracking-[3px]  xl:tracking-[5px] text-[20px] lg:text-[30px] xl:text-[25px] 2xl:text-[50px] ml-8  lg:ml-20 xl:ml-28 2xl:ml-52">
            LET`S DO
          </p>
          <p className="text-[50px] tracking-[15px] lg:text-[90px] lg:tracking-[15px] xl:text-[100px] xl:-mt-5 2xl:-mt-10 2xl:text-[200px] font-normal xl:tracking-[20px] 2xl:tracking-[16px] ">
            THIS
          </p>
          <p className="text-[6px] md:text-[8px] xl:text-[12px] tracking-[2px] text-center">
            UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS WINDOW
          </p>
          {/* <p className="text-[4px] md:text-[6px]  xl:text-[8px] 2xl:text-[12px] tracking-[2px] absolute sm:-bottom-5 sm:-left-44 md:-left-56  xl:-bottom-7 xl:-left-[283px]  2xl:-bottom-10 2xl:-left-80 ">
            UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS WINDOW
          </p> */}
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
                    className={`absolute top-0 right-0  bg-[#1A1A1A] p-5 sm:w-[490px] md:w-[490px] md:h-[520px] lg:w-[580px] xl:w-[610px] 2xl:w-[960px] 3xl:w-[980px] md:min-h-[100vh]`}
                  >
                    <div className="flex  items-start gap-x-10 2xl:mt-5 3xl:mt-8">
                      <div className="flex flex-col items-start  ">
                        <div
                          className={`flex items-center gap-x-10 hover:cursor-pointer `}
                        >
                          <RxCross1
                            color="white"
                            className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] 3xl:-mt-5"
                            onClick={() => {
                              setIsOpen(false);
                            }}
                          />
                          <p className="text-white  text-[10px] lg:text-[14px] tracking-[2px]">
                            MENU
                          </p>
                        </div>
                        <img
                          src="/assets/1.png"
                          className="sm:w-[100px] sm:h-[100px] md:w-[110px] md:h-[100px] lg:w-[120px] lg:h-[120px] xl:w-[120px] xl:h-[120px] 2xl:w-[180px] 2xl:h-[180px] 3xl:w-[200px] 3xl:h-[200px] sm:mt-3 sm:mb-3  lg:mt-6 lg:mb-6 xl:mt-3 xl:mb-3  2xl:mt-14 2xl:mb-10"
                          alt="1"
                        />
                        <img
                          src="/assets/2.png"
                          className="sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] xl:w-[120px] xl:h-[120px] 2xl:w-[180px] 2xl:h-[180px] 3xl:w-[200px] 3xl:h-[200px]"
                          alt="2"
                        />
                      </div>

                      <div className="flex flex-col items-center sm:gap-y-6 md:gap-y-[22px] lg:gap-y-10 xl:gap-y-3 sm:-ml-5 md:ml-0  2xl:gap-y-0 3xl:gap-y-5">
                        <img
                          src="/assets/ZITRANSFER_White.png"
                          className="sm:w-[120px]   lg:w-[150px] 2xl:w-[233px] 2xl:h-[20px] xl:w-[150px]  xl:h-[15px] sm:mt-4  md:mt-6 lg:mt-9 xl:mt-5 2xl:mt-6 3xl:mt-7 2xl:ml-14 2xl:mb-16"
                          alt="ZITRANSFER"
                        />
                        <img
                          src="/assets/3.png"
                          alt=""
                          className="sm:w-[320px] sm:h-[185px]  lg:w-[300px] lg:h-[230px] xl:w-[250px] xl:h-[230px] 2xl:w-[360px] 2xl:h-[360px] 3xl:w-[400px] 3xl:h-[400px]  md:-ml-6 lg:-ml-0 xl:ml-0 2xl:ml-5  rounded-[20px]"
                        />
                      </div>

                      <div className="flex flex-col items-end  mt-6 gap-x-4 ">
                        <div className="flex items-center  gap-x-4 sm:ml-11 sm:-mt-[18px] sm:mb-2  xl:ml-28 2xl:ml-40 3xl:ml-28  3xl:-mt-3 md:-mt-[12px] lg:-mt-3 xl:-mt-4 xl:mb-2 2xl:-mt-6 2xl:mb-5">
                          <CiUser
                            color="white"
                            className="sm:text-[20px] md:text-[16px] 2xl:text-[25px] cursor-pointer"
                            onClick={()=>{route.push("/Form");
                          }}
                          />
                          <img
                            src="assets/UK.svg"
                            alt="countryLogo"
                            className="sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] 2xl:w-[50px] 2xl:h-[50px]"
                          />
                        </div>

                        <div className="leading-[27px] md:leading-[26px] lg:leading-[37px] xl:leading-[31px] 2xl:leading-[54px] 3xl:leading-[60px] 3xl:mr-0   tracking-[2px]">
                          <p className="text-right text-[7px] md:text-[10px] lg:text-[10px] xl:text-[16px] tracking-[4px] text-white">
                            FEATURES
                          </p>
                          <p className="text-right text-[7px] md:text-[8px] lg:text-[10px] xl:text-[16px] text-white tracking-[4px]">
                            PRODUCTS
                          </p>
                          <p className="text-right text-[7px] md:text-[8px] lg:text-[10px] xl:text-[16px] text-white tracking-[4px]">
                            HOW TO <span className="text-[#474646]">ZTFR</span>{" "}
                          </p>
                          <p className="text-right text-[7px] md:text-[8px] lg:text-[10px] xl:text-[16px] text-white tracking-[4px]">
                            PRODUCTS
                          </p>
                          <p className="text-right text-[7px] md:text-[8px] lg:text-[10px]  xl:text-[16px] text-white tracking-[4px]">
                            ADVERTISING
                          </p>
                          <p className="text-right text-[7px] md:text-[8px] lg:text-[10px]  xl:text-[16px] text-white tracking-[4px]">
                            COMPANY
                          </p>
                          <p className="text-right text-[7px] md:text-[8px] lg:text-[10px]  xl:text-[16px] text-white tracking-[4px]">
                            MY ACCOUNT
                          </p>
                          <p className="text-right text-[7px] md:text-[8px] lg:text-[10px]  xl:text-[16px] text-white tracking-[4px]">
                            NEWSROOM/PRESS
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:mt-1 md:mt-2 lg:mt-0 xl:mt-1 xl:mb-1 2xl:mt-0 3xl:mt-0">
                      <img
                        src="/assets/5.png"
                        className="sm:w-[94px] sm:h-[100px] lg:w-[112px] lg:h-[120px] 2xl:w-[200px] 2xl:h-[200px]"
                        alt="5"
                      />
                      <div className="flex flex-col gap-y-5 sm:mt-10 md:mt-14  sm:mx-1 lg:mr-2 md:ml-3 2xl:mx-2 3xl:mx-5  xl:mx-[6px] mr-2 xl:mt-14 3xl:mr-3   2xl:mt-[150px]">
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
                      <div>
                        <img
                          src="/assets/67.png"
                          className="sm:w-[160px] sm:h-[80px] lg:w-[170px] lg:h-[90px] xl:w-[190px] xl:h-[90px] 2xl:w-[290px] 2xl:h-[160px] 3xl:w-[260px] 3xl:h-[160px] sm:ml-3 sm:mt-3 lg:mt-5 xl:ml-8  xl:mt-3   2xl:mt-7 2xl:ml-10"
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

                    {/* <div className="flex items-center gap-x-3 absolute 3xl:left-56 3xl:bottom-[58px]">
                          <FaLock color="black" size={10}/>
                          <p className="text-[8px] tracking-[1.7px]"> ZITRANSFER USES ADVANCED ENCRIPTION STANDARD (AES) 256-BIT TO PROTECT THE CONFIDENTIALITY OF THE DATA YOU UPLOAD. </p>
                        </div> */}
                    <div className="flex items-center justify-between sm:mt-1 md:mt-2 lg:mt-3 xl:mt-1 2xl:mt-2 3xl:mt-5">
                      <img
                        src="/assets/8.png"
                        className="sm:w-[94px] sm:h-[100px] lg:h-[120px] lg:w-[112px]  2xl:w-[200px] 2xl:h-[200px]"
                        alt=""
                      />
                      <img
                        src="/assets/9.png"
                        alt=""
                        className="sm:w-[94px] sm:h-[100px] lg:h-[120px] lg:w-[112px] 2xl:w-[200px] 2xl:h-[200px]"
                      />
                      <img
                        src="/assets/11.png"
                        alt=""
                        className="sm:w-[94px] sm:h-[100px] lg:h-[120px] lg:w-[112px] 2xl:w-[200px] 2xl:h-[200px]"
                      />
                      <img
                        src="/assets/10.png"
                        alt=""
                        className="sm:w-[94px] sm:h-[100px] lg:h-[120px] lg:w-[112px] 2xl:w-[200px] 2xl:h-[200px]"
                      />
                    </div>

                    <div className="relative flex justify-between items-center sm:mt-3 lg:mt-7 xl:mt-3 2xl:mt-5 3xl:mt-10">
                      <p className="text-[#2E2E2E] tracking-[2px] lg:tracking-[4px] 2xl:tracking-[5px] text-[10px] lg:text-[14px] xl:text-[12px] 2xl:text-[20px] sm:ml-5 lg:ml-5 2xl:ml-9">
                        FOUNDATION
                      </p>
                      <p className="text-white opacity-50 tracking-[2px] text-[8px]  lg:text-[10px]  2xl:text-[16px] lg:tracking-[5px]">
                        TERMS | PRIVACY
                      </p>

                      <div className="flex items-center gap-x-2 xl:gap-x-2 2xl:gap-x-[20px] xl:mr-3 2xl:mr-5 ">
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
       
          <>
            {RcurrentIndex === 1 ? (
              <div
                onClick={() => setIsOpen(!isOpen)}
                className=" flex justify-center items-center cursor-pointer sm:w-[25px] sm:h-[100px] lg:w-[30px] lg:h-[150px] 2xl:w-[46px] 3xl:w-[50px] 2xl:h-[213px] bg-black rounded-tl-[15px] rounded-bl-[10px]"
              >
                <p
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white text-[14px] 2xl:text-[26px] tracking-[4px]  xl:ml-1 cursor-pointer   -rotate-90"
                >
                  MENU
                </p>
              </div>
            ) : (
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-center items-center cursor-pointer sm:w-[25px] sm:h-[100px] lg:w-[30px] lg:h-[150px] 2xl:w-[46px] 3xl:w-[50px] 2xl:h-[213px] bg-black rounded-tl-[15px] rounded-bl-[10px]"
              >
                <img
                  onClick={() => setIsOpen(!isOpen)}
                  src={rightArr[RcurrentIndex]}
                  alt="Background Image"
                  className=" sm:w-[15px] sm:h-[50px] 2xl:w-[23px] 2xl:h-[90px] cursor-pointer  xl:ml-1 2xl:ml-0"
                />{" "}
              </div>
            )}
          </>
        {/* )} */}
      </div>

      <footer className="leading-[10px] lg:leading-[15px] xl:leading-[20px] 2xl:leading-[30px]   mb-1 lg:ml-5">
        <p className="text-[#BE9F56]  text-[4px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px] tracking-[2px] ml-5 lg:ml-5 sm:mb-1 lg:mb-0  xl:ml-10">&copy; ZTRANSFER 2023 </p>
          <div className="flex justify-between items-center ml-5 sm:mr-5 md:mr-0 xl:ml-10">
          <div className=" flex items-center ">
        <span className="text-[#BE9F56] text-[4px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px] tracking-[2px] ">ALL RIGHTS RESERVED</span>
        <span className="text-[#BE9F56] text-[4px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px] tracking-[2px] md:mr-8  lg:mr-0 ml-10 xl:ml-10">ZITRANFER IS THE PART OF ZIMO GROUP</span>
        </div>
            

        <p className="text-[#BE9F56] text-[4px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px] tracking-[2px] sm:ml-0 sm:mr-0 md:mr-5 lg:mr-8 xl:mr-5 2xl:mr-14">ZITRANSFER USES ADVANCED ENCRIPTION STANDARD (AES) 256-BIT TO PROTECT THE CONFIDENTIALITY OF THE DATA YOU UPLOAD.</p>
    
          </div>
       </footer>
    </div>
  );
};

export default HomePage;
