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
import { IoIosArrowUp,IoIosArrowForward,IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import "react-modern-drawer/dist/index.css";
import { CiUser } from "react-icons/ci";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import Marquee from "react-fast-marquee";



const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userLogin, setUserLogin] = useState({});
  const [user, setUser] = useState({});
  const route = useRouter();
  let imagesTwo = ["/assets/1.png", "/assets/2.png", "/assets/5.png"];
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [position, setPosition] = useState(480);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) =>
        (prevPosition == -550 ?300 : prevPosition - 1)
      );
    }, 10);

    return () => clearInterval(intervalId);
  }, []);
  const isOpenHandler = () => {
    setIsOpen(!isOpen);
    setUserLogin({ Email: "", PASSWORD: "" });
    setUser({
      email: "",
      password: "",
      ORGANIZATION: "",
      firstName: "",
      lastName: "",
    });
  };

  const getUserInputForLogin = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      if (!userLogin.PASSWORD || !userLogin.Email)
        return console.log("Email / Password is missing!!");
      await signInWithEmailAndPassword(
        auth,
        userLogin.Email,
        userLogin.PASSWORD
      );
      route.push("/HomePage");
      toast.success("Logging Successfully");
      setUserLogin({ Email: "", PASSWORD: "" });

      console.log("Logged in");
    } catch (err) {
      console.log("Error in Logging", err);
      toast.error(err.message);
    }

    setLoader(false);
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      toast.success("Logging Successfully");
      route.push("/HomePage");
    } catch (error) {
      toast.error("Logging Error");
    }
  };

  const getUserInputForSignUp = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      if (!user.email || !user.password) {
        setError("Email and Password are required");
        return;
      }

      if (!user.password) return console.log("password is missing!!");
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      setUser({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        ORGANIZATION: "",
      });
      toast.success("Sign up Successfully");
    } catch (err) {
      toast.error("Registration failed!");
    }
    setLoader(false);
  };

  // Continue with google

  const handleGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      route.push("/HomePage");
      toast.success("Sign In Successfully");
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(true);
  };
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      console.log(user);
    }, 1000);

    return () => clearTimeout(debounceTimeout);
  }, [user, userLogin]);

  const rightArr = ["/assets/ZimoLogo.svg", "MORE"];
  const [RcurrentIndex, setRCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRCurrentIndex((prevIndex) => (prevIndex + 1) % rightArr.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [RcurrentIndex, rightArr.length]);
  return (
    <div>
      <Navbar />

      <div className="flex flex-col justify-between h-[100%] xl:-mt-5 ">
        <div className=" sm:h-[400px] md:h-[390px] lg:h-[500px] xl:h-[440px]  2xl:h-[800px] 3xl:h-[900px]">
          <div className=" overflow-hidden block md:flex  md:h-[400px] lg:h-[400px] xl:h-[480px]  2xl:h-[800px]   justify-between items-center md:-mt-5 lg:mt-0 xl:-mt-10">
            <div
              className={` xl:w-[20%]  relative  sm:mt-24  sm:ml-20: 3xl:ml-40 3xl:mt-0 ${
                isOpen ? "md:mt-5" : "md:mt-5"
              }  2xl:mt-20 xl:mt-10 lg:mt-10  ${
                isOpen ? "3xl:ml-36" : "ml-0"
              } md:ml-10    xl:ml-20 lg:ml-10 ml-5`}
            >
              <img
                src="/assets/img1.png"
                className=" sm:w-[100px] sm:h-[120px] md:w-[120px] md:h-[170px] lg:w-[190px] lg:h-[240px] xl:w-[170px] xl:h-[240px]  2xl:w-[264px] 2xl:h-[352px]"
                alt="img1"
              />
              <img
                src="/assets/img2.png"
                className="sm:w-[90px] sm:h-[80px] md:w-[100px] md:h-[100px]  lg:w-[140px] lg:h-[140px] 2xl:w-[152px] 2xl:h-[152px] absolute sm:top-4 sm:left-14  md:top-[40px] md:left-[70px]  lg:left-[70px] xl:left-[100px] xl:top-[60px] lg:top-[68px]  2xl:top-24 2xl:left-[225px]"
                alt="img2"
              />
              <img
                src="/assets/img3.png"
                className="sm:w-[120px] sm:h-[90px] md:w-[170px] md:h-[130px] lg:w-[250px] lg:h-[174px]  xl:h-[174px] xl:w-[266px] 2xl:h-[200px] absolute sm:-top-12 sm:left-[98px] md:-top-14 md:left-[132px]  lg:left-[160px] xl:left-[190px] xl:-top-16 lg:-top-14  2xl:-top-14 2xl:left-[299px]"
                alt="img3"
              />
            </div>

            <div
              className={`3xl:-mt-14 xl:mt-2 xl:ml-56 bg-cyan  ${
                isOpen ? "" : "sm:-mt-14"
              } ${
                isOpen ? "sm:ml-56" : "sm:ml-56"
              }    3xl:ml-52 2xl:mt-8  lg:ml-44 lg:mr-5 lg:mt-0  2xl:ml-72  md:mt-0 md:ml-32`}
            >
              <img
                src="/assets/img4.png"
                alt="ZFTR"
                className={`sm:w-[100px] sm:h-[15px] md:w-[130px] md:h-[15px] lg:w-[200px] lg:[h-20px] xl:w-[170px] xl:[h-25px] 2xl:w-[250px] 2xl:h-[30px] 3xl:w-[355px] 3xl:h-[35px]`}
              />
            </div>

            <div
              className={`  sm:ml-[52%] sm:-mt-32    ${
                isOpen && "sm:h-[220px]"
              }  ${isOpen && "md:h-[382px]"}  ${isOpen && "lg:h-[414px]"} ${
                isOpen && "xl:h-[414px]"
              } ${isOpen && "2xl:h-[654px]"} ${
                isOpen ? "" : ""
              } :'3xl:mr-10 sm:ml-60 md:ml-0 md:mt-0  md:-mr-40 lg:mr-0 `}
            >
              <div className="sm:w-[220px] sm:h-[20px] md:w-[250px] md:h-[20px] lg:w-[350px] lg:h-[40px] 2xl:w-[450px] 2xl:h-[63px] flex justify-around">
                <p
                  onClick={isOpenHandler}
                  className={`text-[10px] lg:text-[16px] 2xl:text-[18px] tracking-[2px] cursor-pointer ${
                    isOpen && "text-[#BE9F56]"
                  }`}
                >
                  LOG IN
                </p>
                <p
                  className={`text-[10px] lg:text-[16px] 2xl:text-[18px] tracking-[2px] ${
                    !isOpen && "text-[#BE9F56]"
                  } cursor-pointer`}
                  onClick={isOpenHandler}
                >
                  CREATE USER ID
                </p>
              </div>
              <div className="flex items-center justify-between  md:justify-start 2xl:justify-center   dark:bg-gray-800">
                <button
                  onClick={isOpen ? handleGoogleLogin : handleGoogleSignUp}
                  className="px-6 py-2 border sm:w-[230px] sm:h-[25px] md:w-[250px] md:h-[40px] lg:w-[350px] lg:h-[40px] 2xl:w-[450px] 2xl:h-[63px]  flex justify-between items-center border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
                >
                  <img
                    className="sm:w-[19px] md:w-[19px] md:h-[20px] lg:w-[28px] lg:h-[29px] 2xl:w-[38px] 2xl:h-[39px]"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    loading="lazy"
                    alt="google logo"
                  />
                  <span className="text-[8px] md:text-[10px] lg:text-[14px] 2xl:text-[18px] uppercase tracking-[2px]">
                    Continue with Google
                  </span>
                </button>
              </div>
              <p className="text-[#BE9F56] tracking-[2px] text-center text-[12px] sm:w-[230px] md:w-[250px] md:h-[20px] lg:w-[350px] lg:h-[30px] 2xl:w-[450px] 2xl:h-[50px]  lg:text-[20px] 2xl:text-[32px]">
                OR
              </p>
              <form onSubmit={isOpen ? handleLogin : handleRegistration}>
                <div className={`mb-2 2xl:mb-5 `}>
                  <input
                    onChange={
                      isOpen ? getUserInputForLogin : getUserInputForSignUp
                    }
                    type="email"
                    id="email"
                    name={isOpen ? "Email" : "email"}
                    className="sm:w-[230px] sm:h-[25px] md:w-[250px] md:h-[40px] text-[10px]  lg:w-[350px] lg:h-[40px] 2xl:w-[450px] 2xl:h-[63px]  border border-gray-300 text-[#000000] lg:text-[12px] 2xl:text-[18px] rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#000000] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="EMAIL"
                    value={isOpen ? userLogin.Email : user.email}
                    required
                  />
                </div>
                {!isOpen && (
                  <div className={``}>
                    <div className="mb-2 2xl:mb-5">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="sm:w-[230px] sm:h-[25px] md:w-[250px] md:h-[40px] text-[10px]  lg:w-[350px] lg:h-[40px] 2xl:w-[450px] 2xl:h-[63px]  border border-gray-300 text-[#000000] lg:text-[12px] 2xl:text-[18px] rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#000000] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        // value={ user.firstName}
                        placeholder="FIRST NAME"
                        required
                      />
                    </div>

                    <div className="mb-2 2xl:mb-5">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="sm:w-[230px] sm:h-[25px]  md:w-[250px] md:h-[40px] text-[10px]  lg:w-[350px] lg:h-[40px] 2xl:w-[450px] 2xl:h-[63px]  border border-gray-300 text-[#000000] lg:text-[12px] 2xl:text-[18px] rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#000000] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="LAST NAME"
                        // value={user.lastName}

                        required
                      />
                    </div>

                    <div className="mb-2 2xl:mb-5">
                      <input
                        type="text"
                        id="ORGANIZATION"
                        name="ORGANIZATION"
                        className="sm:w-[230px] sm:h-[25px] md:w-[250px] md:h-[40px] text-[10px]  lg:w-[350px] lg:h-[40px] 2xl:w-[450px] 2xl:h-[63px]  border border-gray-300 text-[#000000] lg:text-[12px] 2xl:text-[18px] rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#000000] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ORGANIZATION (OPTIONAL)"
                        // value={user.ORGANIZATION}
                      />
                    </div>
                  </div>
                )}
                <div className="mb-2 2xl:mb-5">
                  <input
                    onChange={
                      isOpen ? getUserInputForLogin : getUserInputForSignUp
                    }
                    type="password"
                    id="PASSWORD"
                    name={isOpen ? "PASSWORD" : "password"}
                    className="sm:w-[230px] sm:h-[25px] md:w-[250px] md:h-[40px] text-[10px]  lg:w-[350px] lg:h-[40px] 2xl:w-[450px] 2xl:h-[63px]  border border-gray-300 text-[#000000] lg:text-[12px] 2xl:text-[18px] rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#000000] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="PASSWORD"
                    value={isOpen ? userLogin.PASSWORD : user.password}
                    required
                  />
                </div>

                <div className="flex justify-between leading-[15px] w-[450px] h-[63px] relative">
                  <p className="sm:text-[6px] md:text-[7px] lg:text-[10px] tracking-[2px]">
                    By creating an USER ID, you agree to our
                    <p className="sm:text-[6px] md:text-[7px] lg:text-[10px] tracking-[2px]">
                      Terms of Service and Privacy & Cookie Statement.
                    </p>
                  </p>
                  {loader ? (
                    <div class="custom-loader"></div>
                  ) : (
                    <button>
                      <img
                        src="/assets/tickMark.png"
                        className="sm:w-[30px] sm:h-[50px] lg:w-[110px] lg:h-[73px] 2xl:w-[120px] 2xl:h-[80px] 3xl:w-[137px] 3xl:h-[100px]  absolute sm:right-48 sm:bottom-10  md:right-40 md:bottom-8 lg:right-4 lg:bottom-0 xl:right-4  xl:bottom-0 2xl:-right-10 2xl:bottom-3 3xl:-right-[100px] 3xl:-bottom-2"
                        alt="submit"
                      />
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div>
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


              {RcurrentIndex === 1 ? (
                <div
                  onClick={toggleDrawer}
                  className="sm:absolute sm:top-[45%] sm:right-0  md:relative sm:w-[25px] sm:h-[100px] md:w-[26px] md:h-[150px] lg:w-[30px] lg:h-[180px] 2xl:w-[50px] 2xl:h-[213px] bg-black rounded-tl-[15px] rounded-bl-[10px] flex justify-center items-center cursor-pointer"
                >
                  <p
                    onClick={toggleDrawer}
                    className="text-white cursor-pointer text-[12px] md:text-[18px] 2xl:text-[26px] tracking-[4px]  -rotate-90"
                  >
                    MENU
                  </p>
                </div>
              ) : (
                <div
                  onClick={toggleDrawer}
                  className="flex justify-center items-center sm:absolute sm:top-[45%] sm:right-0  md:relative sm:w-[25px] sm:h-[100px] md:w-[26px]  md:h-[150px] lg:w-[30px] lg:h-[180px] 2xl:w-[50px] 2xl:h-[213px] bg-black rounded-tl-[15px] rounded-bl-[10px] cursor-pointer"
                >
                  <img
                    onClick={toggleDrawer}
                    src={rightArr[RcurrentIndex]}
                    alt="Background Image"
                    className="sm:w-[15px] sm:h-[40px] md:w-[18px] md:h-[60px] 2xl:w-[23px] 2xl:h-[90px]   3xl:m-0 cursor-pointer "
                  />{" "}
                </div>
              )}
            </div>
          </div>

          <FaArrowLeft
            className={`2xl:w-[30px] 2xl:h-[22px] sm:ml-5 sm:mt-0  md:-mt-6   xl:-mt-[45px] lg:mt-5 lg:ml-5 ${
              !isOpen && "md:ml-5"
            }  ${
              isOpen ? "" : "xl:-mt-5"
            }  2xl:-mt-16 2xl:ml-10 3xl:-mt-16 md:-mt-[40px] ${
              isOpen ? "md:ml-5" : ""
            } xl:ml-10   cursor-pointer`}
          />
        </div>

        <footer className="leading-[10px] lg:leading-[15px] xl:leading-[20px] 2xl:leading-[30px]  2xl:mt-0">
          <p className="text-[#BE9F56] text-[5px] md:text-[6px] xl:text-[8px] 2xl:text-[10px] lg:tracking-[2px] ml-5 sm:mb-1 lg:mb-0  xl:ml-10">
            &copy; ZTRANSFER 2023{" "}
          </p>
          <div className="flex justify-between items-center ml-5 sm:mr-5 md:mr-0 xl:ml-10">
            <div className=" flex items-center ">
              <span className="text-[#BE9F56] text-[5px] md:text-[6px]  xl:text-[8px] 2xl:text-[10px] lg:tracking-[2px] ">
                ALL RIGHTS RESERVED
              </span>
              <span className="text-[#BE9F56] text-[5px] md:text-[6px] xl:text-[8px] 2xl:text-[10px] lg:tracking-[2px] sm:mr-2 md:mr-10 lg:mr-0 ml-10 xl:ml-10">
                ZITRANFER IS THE PART OF ZIMO GROUP
              </span>
            </div>

            <p className="text-[#BE9F56] text-[5px] md:text-[6px]  xl:text-[8px] 2xl:text-[10px] lg:tracking-[2px] sm:mr-0 md:mr-5 xl:mr-10">
              ZITRANSFER USES ADVANCED ENCRIPTION STANDARD (AES) 256-BIT TO
              PROTECT THE CONFIDENTIALITY OF THE DATA YOU UPLOAD.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Form;
