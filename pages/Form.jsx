/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import Login from "../components/Login";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "@/firbase";
import { useRouter } from "next/router";
const Form = () => {
const [isOpen,setIsOpen]=useState(false);
const [user,setUser]=useState({});
const [nullField,setNullField]=useState()


const getUserInput = (e) => {
  const { name, value } = e.target;
  setUser({ ...user, [name]: value });
};
const handleRegistration=async(e)=>{
    e.preventDefault()
    try{
      if(!user.password) return console.log("password is missing!!");
      await createUserWithEmailAndPassword(auth,user.email,user.password);
      setNullField('')
      console.log("Submitted")
    }catch(err){
      console.log("Error in registration", err);
    }

}



// Continue with google

const handleGoogleSignIn = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    
    console.log('Google Sign-In successful!', user);
  } catch (error) {
    console.error('Error signing in with Google', error);
  }
};




useEffect(() => {
  const debounceTimeout = setTimeout(() => {
    console.log(user)
  }, 1000);

  return () => clearTimeout(debounceTimeout);
}, [user]); 



const rightArr = ["/assets/ZimoLogo.svg","MORE"];
const [RcurrentIndex, setRCurrentIndex] = useState(0);

useEffect(() => {
  const intervalId = setInterval(() => {
    setRCurrentIndex((prevIndex) => (prevIndex + 1) % rightArr.length);
  }, 3000);

  return () => clearInterval(intervalId);
}, [RcurrentIndex, rightArr.length]);
  return (
    <div className="flex flex-col justify-between xl:h-[530px] 2xl:h-[820px] 3xl:h-[930px]  xl:-mt-5 2xl:mt-0">

    
    <div>
 <div className="overflow-hidden block md:flex   justify-between items-center">
      <div className={`relative  ${isOpen? "sm:mt-5": 'sm:mt-5'} ${!isOpen && '3xl:ml-48'} ${isOpen? 'md:mt-5':'mt-10'}  ${isOpen? '3xl:mt-32':''} ${isOpen? '2xl:mt-40':'2xl:mt-20'} ${isOpen? 'xl:mt-20':'xl:mt-10'} ${isOpen? 'lg:mt-20':'lg:mt-10'} ${isOpen? '3xl:mt-14':'mt-0'} ${isOpen? '3xl:ml-36':'ml-0'} ${!isOpen&& 'md:ml-10'}      xl:ml-20 lg:ml-10 ml-5`}>
        <img
          src="/assets/img1.png"
          className="sm:w-[80px] sm:h-[90px] md:w-[120px] md:h-[170px] lg:w-[190px] lg:h-[270px] 2xl:w-[264px] 2xl:h-[352px]"
          alt="img1"
        />
        <img
          src="/assets/img2.png"
          className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px]  lg:w-[140px] lg:h-[140px] 2xl:w-[152px] 2xl:h-[152px] absolute sm:top-5 sm:left-12  md:top-[40px] md:left-[70px]  lg:left-[70px] xl:left-[120px] lg:top-[68px]  2xl:top-24 2xl:left-[225px]"
          alt="img2"
        />
        <img
          src="/assets/img3.png"
          className="sm:w-[60px] sm:h-[70px] md:w-[170px] md:h-[130px] lg:w-[250px] lg:h-[174px] 2xl:w-[266px] 2xl:h-[200px] absolute sm:-top-5 sm:left-[88px] md:-top-14 md:left-[132px]  lg:left-[150px] xl:left-[200px] lg:-top-14  2xl:-top-14 2xl:left-[299px]"
          alt="img3"
        />
      </div>

      <div className={`${isOpen? '':'sm:-mt-14'} ${isOpen? 'sm:ml-56':'sm:ml-56'}  ${isOpen? '3xl:mt-0':'mt-1'} ${isOpen?"3xl:ml-52":"ml-48"} ${isOpen? '2xl:mt-24':'mt-10'} ${isOpen? 'lg:mt-14':'mt-10'} ${isOpen? 'md:mt-0':'md:-mt-7'} ${isOpen? '2xl:ml-80':'2xl:ml-72'} ${isOpen? 'lg:ml-48':''}  ${!isOpen&& 'xl:mt-2'}  ${isOpen? 'md:ml-36':'md:ml-32'} ${isOpen? 'xl:ml-64':''}  lg:mr-5   `}>
        <img src="/assets/img4.png" alt="ZFTR" className={`sm:w-[100px] sm:h-[15px] md:w-[130px] md:h-[15px] lg:w-[200px] lg:h-[25px]  2xl:w-[250px] 3xl:w-[355px] 2xl:h-[35px]`} />
      </div>

{
  isOpen? <Login setIsOpen={setIsOpen}/>:

      <div className={ `${isOpen? '':'sm:mt-5'} ${isOpen? '':'sm:ml-60'} md:ml-0 md:mt-0  md:-mr-40 lg:mr-0`}>
        <div className="sm:w-[220px] sm:h-[20px] md:w-[250px] md:h-[20px] lg:w-[350px] lg:h-[40px] 2xl:w-[450px] 2xl:h-[63px] flex justify-around">
        <p onClick={()=>setIsOpen(true)} className="text-[10px] lg:text-[16px] 2xl:text-[18px] tracking-[2px] cursor-pointer">LOG IN</p>
        <p className="text-[10px] lg:text-[16px] 2xl:text-[18px] tracking-[2px] text-[#BE9F56]" >CREATE USER ID</p>
        </div>
        <div className="flex items-center justify-between  md:justify-start 2xl:justify-center   dark:bg-gray-800">
          <button onClick={handleGoogleSignIn} className="px-6 py-2 border sm:w-[230px] sm:h-[25px] md:w-[250px] md:h-[40px] lg:w-[350px] lg:h-[40px] 2xl:w-[450px] 2xl:h-[63px]  flex justify-between items-center border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
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
        <form onSubmit={handleRegistration}>
          <div className="mb-2 2xl:mb-5">
            <input
            onChange={getUserInput}
              type="email"
              id="email"
              name="email"
              className="sm:w-[230px] sm:h-[25px] md:w-[250px] md:h-[40px] text-[10px]  lg:w-[350px] lg:h-[40px] 2xl:w-[450px] 2xl:h-[63px]  border border-gray-300 text-[#000000] lg:text-[12px] 2xl:text-[18px] rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#000000] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="EMAIL"
              value={nullField}

              required
            />
          </div>
          <div className="mb-2 2xl:mb-5">
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="sm:w-[230px] sm:h-[25px] md:w-[250px] md:h-[40px] text-[10px]  lg:w-[350px] lg:h-[40px] 2xl:w-[450px] 2xl:h-[63px]  border border-gray-300 text-[#000000] lg:text-[12px] 2xl:text-[18px] rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#000000] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="FIRST NAME"
              value={nullField}
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
              value={nullField}

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
              value={nullField}

              required
            />
          </div>

          <div className="mb-2 2xl:mb-5">
            <input
              onChange={getUserInput}
              type="password"
              id="PASSWORD"
              name="password"
              className="sm:w-[230px] sm:h-[25px] md:w-[250px] md:h-[40px] text-[10px]  lg:w-[350px] lg:h-[40px] 2xl:w-[450px] 2xl:h-[63px]  border border-gray-300 text-[#000000] lg:text-[12px] 2xl:text-[18px] rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#000000] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="PASSWORD"
              value={nullField}

              required
            />
          </div>

          <div className="flex justify-between leading-[20px] w-[450px] h-[63px] relative">
            <p className="text-[7px] lg:text-[10px] tracking-[2px]">
              By creating an USER ID, you agree to our
              <p className="text-[7px] lg:text-[10px] tracking-[2px]">
                Terms of Service and Privacy & Cookie Statement.
              </p>
            </p>
<button>
<img
              src="/assets/tickMark.png"
              className="sm:w-[40px] lg:w-[110px] lg:h-[73px] 2xl:w-[137px] 2xl:h-[100px]  absolute sm:right-44 sm:bottom-10  md:right-36 md:bottom-5 lg:right-4 lg:bottom-0 xl:right-4  xl:bottom-0 2xl:-right-24 2xl:-bottom-1"
              alt="submit"
            />
</button>
           
          </div>
        </form>
      </div>
    }
    {

RcurrentIndex===1 ? <div className="sm:absolute sm:top-[45%] sm:right-0  md:relative sm:w-[25px] sm:h-[100px] md:w-[26px] md:h-[150px] lg:w-[30px] lg:h-[180px] 2xl:w-[50px] 2xl:h-[213px] bg-black rounded-tl-[15px] rounded-bl-[10px]">
<p className="text-white text-[12px] md:text-[18px] 2xl:text-[26px] tracking-[4px] sm:mt-12 md:mt-[80px] lg:mt-[95px] xl:ml-1  2xl:mt-[108px] -rotate-90">MENU</p>
      </div>:   <div className="sm:absolute sm:top-[45%] sm:right-0  md:relative sm:w-[25px] sm:h-[100px] md:w-[26px]  md:h-[150px] lg:w-[30px] lg:h-[180px] 2xl:w-[50px] 2xl:h-[213px] bg-black rounded-tl-[15px] rounded-bl-[10px]">
      <img
          // onClick={}
          src={rightArr[RcurrentIndex]}
          alt="Background Image"
          className="sm:w-[15px] sm:h-[40px] md:w-[18px] md:h-[60px] 2xl:w-[23px] 2xl:h-[90px] sm:mt-7 sm:ml-1  md:ml-1 md:mt-10 lg:mt-14 2xl:mt-16 xl:ml-1.5 2xl:ml-3"
         
        />      </div>
    }
     

 </div>
      <FaArrowLeft className={`2xl:w-[30px] 2xl:h-[22px] mb-2 md:-mt-6 lg:my-5  xl:-mt-2 ${!isOpen && "md:ml-5"} ${!isOpen && "lg:ml-10"} ${isOpen?"":"xl:-mt-5"}   ${isOpen?"3xl:-mt-5":""}  ${isOpen?"md:mb-5":"md:mb-4"} ${isOpen?"md:ml-5":""} ${isOpen?"xl:ml-10":""} ${isOpen?"2xl:mt-24":"2xl:mt-5"} ml-10 cursor-pointer`}/> 
    </div>

    <div className="leading-[10px] md:leading-[10px] lg:leading-[30px] flex justify-between items-end ">
        <p>
        <p className="text-[#BE9F56] md:-mt-4 lg:-mb-4 2xl:mb-0 text-[6px] lg:text-[8px] 2xl:text-[10px] tracking-[2px] mx-5 lg:mx-10">&copy; ZTRANSFER 2023 </p>

        <p className="  xl:mb-0 2xl:mb-0">
        <span className="text-[#BE9F56] text-[6px] lg:text-[8px] xl:text-[8px] 2xl:text-[10px] tracking-[2px] mx-5 lg:mx-10">ALL RIGHTS RESERVED</span>
        <span className="text-[#BE9F56] text-[6px] lg:text-[8px] xl:text-[8px] 2xl:text-[10px] tracking-[2px]">ZITRANFER IS THE PART OF ZIMO GROUP</span>
        </p>
            
        </p>

        <p className="text-[#BE9F56] w-[40%]  md:w-[50%] xl:w-[60%]   xl:mb-0 2xl:mb-0 text-[6px] lg:text-[8px] xl:text-[8px] 2xl:text-[10px] tracking-[2px]  lg:ml-5 ml-5 xl:mx-10">ZITRANSFER USES ADVANCED ENCRIPTION STANDARD (AES) 256-BIT TO PROTECT THE CONFIDENTIALITY OF THE DATA YOU UPLOAD.</p>
    </div>
    </div>
  );
};

export default Form;
