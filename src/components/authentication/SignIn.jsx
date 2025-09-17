import React, { useState } from "react"

const SignIn = ({currentPage, setCurrentPage}) => {
  const [showPassword, setshowPassword] = useState(false);

    return (
        <div className="h-[10%] w-full absolute  flex px-3 max-md:justify-between top-0 left-0  bg-white  z-50  py-2">
            <div className="h-full w-[30%]  flex items-center">
                <img className="h-full" src="/logo.png" alt="logo" />
                <h1 className="font-bold text-xl">Launchpad</h1>
            </div>
           <div className="flex justify-center items-center min-h-screen sm:w-[400px] md:w-[500px] lg:w-[600px] p-6 ">
<div className="bg-white rounded-2xl w-full max-w-sm p-6 sm:w-[400px] md:w-[500px] lg:w-[600px] ">

  <h2 className="font-medium" >Log in to your account
    <p className="text-sm text-gray-500 mb-5">
     welcome back! Please enter your details.

    </p>
      <div className="mb-4">

       <label className="block text-sm font-medium text-gray-700 mb-1">
        Email

       </label>
       <div className="flex items-center border rounded-xl px-3 bg-[#E6F7F7]">
        <svg xlms="http://www.w3.org/2000/svg"className="h-4 w-4 text-gray-400" fill="none"viewBox="0 0 24 24" >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"d="M1612H8m8 4H8m-6 4h20V4H2v16z">

        </path>

        </svg>
<input type="email"placeholder="enter your email"className="w-full outline-none px-2 py-2 text-sm"/>

       </div>

      </div>
      <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="flex items-center border rounded-xl px-3 bg-[#E6F7F7] ">
      
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c1.104 0 2 .896 2 2v3H10v-3c0-1.104.896-2 2-2zM6 11V9a6 6 0 1112 0v2"
                />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full  outline-none px-2 py-2 text-sm"
              />
</div>
      </div>
  </h2>
  <button type="button"onClick={()=>setshowPassword(!showPassword)}
    className="text-gray-500 text-sm">
      {
        showPassword 
      }

  </button>
  <div className="flex items-center mb-4 text-sm">
    <label className="flex items-center gap-2">
      <input type="checkbox"className="accent-teal-600"/>
      Remember for 30 days
      </label>
      <a href="#"className="text-teal-600 hover:underline px-9">
        Forgot Password
      </a>

  </div>
  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-xl transition">
    Sign In
  </button>
 <p className="text-center text-sm text-gray-500 mt-4">
  Don't have an account ? {" "}
  <a href="#" className="text-teal-600 font-medium ">
    Sign Up
  </a>

</p>
   </div>
           </div>
        </div>
    );
    };

export default SignIn;
