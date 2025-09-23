import React from "react";
import Navbar from "../landing/Navbar";
import Input from "./utils/Input";

const SignIn = () => {
    return (
        <div className="h-full w-full flex flex-col items-center gap-10">
            <Navbar />
            <div className="h-3/4 w-1/3 border-3 border-[#03989E]  rounded-xl flex flex-col  items-center max-md:w-5/6 max-md:h-2/3">
                <div className="h-[20%] w-full flex flex-col justify-center items-center">
                    <h1 className="font-semibold text-xl">
                        Sign In to your account
                    </h1>
                    <p className="text-sm text-gray-500">
                        Welcome back! Please enter your details.
                    </p>
                </div>
                <div className="h-[40%] w-2/3 flex flex-col items-center justify-center gap-4 max-md:h-[30%] max-md:w-3/4">
                    <Input
                        img={"/mail.png"}
                        label={"Email"}
                        type={"email"}
                        placeholder={"Enter Email"}
                    />
                    <Input
                        img={"/padlock.png"}
                        label={"Password"}
                        type={"Password"}
                        placeholder={"Enter Password"}
                    />
                </div>
                
                <div className="h-[15%] flex items-center justify-center gap-5">
                    <div className="flex gap-1">
                        <input type="checkbox" className="accent-teal-600" />
                        <h1 className="text-sm">Remember for 30 days</h1>
                    </div>
                    <a
                        href="#"
                        className="text-[#03989E] text-sm font-semibold hover:underline justify-end"
                    >
                        Forgot Password
                    </a>
                </div>

                <button className="bg-[#03989E] h-[8%] w-2/3 text-white font-semibold rounded-xl">
                    Sign In
                </button>

                <div className="h-[18%] flex items-center justify-center text-sm gap-2">
                    <h1 className="text-gray-700">Don't have an account ? </h1>
                    <a href="#" className="text-[#03989E] font-semibold ">
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
