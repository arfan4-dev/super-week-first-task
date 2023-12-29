/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firbase';
import {GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router';
const Login = ({setIsOpen}) => {
  const route=useRouter()
  const [user,setUser]=useState({});
const [nullField,setNullField]=useState();


const getUserInputForLogin = (e) => {
  const { name, value } = e.target;
  setUser({ ...user, [name]: value });
};
const handleLogin=async(e)=>{
    e.preventDefault()
    try{
      if(!user.password) return console.log("password is missing!!");
      await signInWithEmailAndPassword(auth,user.email,user.password);
      setNullField('')
      route.push('/HomePage')
      console.log("Logged in")
    }catch(err){
      console.log("Error in Logging", err);
    }

}

const handleGoogleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log('Google Login successful!', user);
    route.push('/HomePage')

  } catch (error) {
    console.error('Error logging in with Google', error);
  }
};

useEffect(() => {
  const debounceTimeout = setTimeout(() => {
    console.log(user)
  }, 1000);

  return () => clearTimeout(debounceTimeout);
}, [user]); 

  return (
    <div className="sm:ml-60 sm:mt-10   md:-mr-40 lg:mr-0 2xl:mr-10 sm:h-[210px] md:h-[370px] lg:h-[400px] xl:h-[470px] 2xl:h-[500px] 3xl:h-[730px]">
    <div className=" sm:w-[230px] sm:h-[25px] 3xl:mt-10 md:w-[250px] md:h-[20px] lg:w-[350px] lg:h-[40px] 2xl:w-[450px] 2xl:h-[63px] flex justify-around">
    <p className="text-[10px] lg:text-[16px] 2xl:text-[18px] tracking-[2px] text-[#BE9F56] cursor-pointer">LOG IN</p>
    <p className="text-[10px] lg:text-[16px] 2xl:text-[18px] tracking-[2px]  cursor-pointer" onClick={()=>setIsOpen(false)}>CREATE USER ID</p>
    </div>
    <div className="flex items-center  xl:justify-start 2xl:justify-center   dark:bg-gray-800">
      <button  onClick={handleGoogleLogin} className="px-6 py-2 border sm:w-[230px] sm:h-[25px] md:w-[250px] md:h-[40px] lg:w-[350px] lg:h-[40px] 2xl:w-[450px] 2xl:h-[63px]  flex justify-between items-center border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
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
    <p className="text-[#BE9F56] tracking-[2px] text-center text-[12px] sm:w-[230px] sm:h-[20px]   md:w-[250px] md:h-[20px] lg:w-[350px] lg:h-[40px] 2xl:h-[50px] 2xl:w-[450px]  lg:text-[20px] 2xl:text-[32px]">
      OR
    </p>
    <form onSubmit={handleRegistration}>
      <div className="mb-2 2xl:mb-5">
        <input
          type="email"
          id="email"
          name="email"
          className="sm:w-[230px] sm:h-[25px] md:w-[250px] md:h-[40px] text-[10px]  lg:w-[350px] lg:h-[40px] 2xl:w-[450px] 2xl:h-[63px]  border border-gray-300 text-[#000000] lg:text-[12px] 2xl:text-[18px] rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#000000] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="EMAIL"
          onChange={getUserInput}
          value={nullField}
          required
        />
      </div>
      
      <div className="mb-2 2xl:mb-5">
        <input
          type="password"
          id="PASSWORD"
          name="password"
          className="sm:w-[230px] sm:h-[25px] md:w-[250px] md:h-[40px] text-[10px]  lg:w-[350px] lg:h-[40px] 2xl:w-[450px] 2xl:h-[63px]  border border-gray-300 text-[#000000] lg:text-[12px] 2xl:text-[18px] rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#000000] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="PASSWORD"
          onChange={getUserInput}
          value={nullField}
          required
        />
      </div>

      <div className="flex justify-between leading-[20px] w-[450px] h-[50px] relative">
        <p className="text-[7px]  lg:text-[10px] sm:w-[50%] md:w-[60%] lg:w-[80%] xl:w-[] 2xl:w-[100%] xl:text-[14px] text-center text-[#BE9F56] tracking-[2px]">
        Forgotten your password? 
        </p>
<button>
<img
          src="/assets/tickMark.png"
          className="sm:w-[40px] lg:w-[110px] lg:h-[73px] 2xl:w-[117px] 2xl:h-[90px]  absolute sm:right-44 sm:bottom-5 md:right-40 md:bottom-5 lg:right-4 lg:bottom-0 xl:right-4  xl:bottom-0 2xl:-right-14 2xl:-bottom-1"
          alt="submit"
        />
</button>
       
      </div>
    </form>
  </div>
  )
}

export default Login