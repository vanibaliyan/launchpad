import React from "react";
import Input from "./utils/Input";
import Navbar from "../landing/Navbar";

const SignUp = () => {
    return (
        <div className="h-full w-full flex flex-col items-center gap-10">
            <Navbar/>
            <div className="h-3/4 w-1/3 border-3 border-[#03989E]  rounded-xl flex flex-col  items-center max-md:w-5/6 max-md:h-2/3">
                <div className="h-[20%] w-full flex flex-col justify-center items-center">
                    <h1 className="font-semibold text-xl">
                        Sign Up to your account
                    </h1>
                    <p className="text-sm text-gray-500">
                        Welcome! Please enter your details.
                    </p>
                </div>
                <div className="h-[50%] w-2/3 flex flex-col items-center justify-center gap-3 max-md:h-[30%] max-md:w-3/4">
                    <Input
                        img={"/user.png"}
                        label={"Name"}
                        type={"name"}
                        placeholder={"Enter Name"}
                    />
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
                
                <div className="h-[10%] w-2/3 flex items-center justify-start gap-5">
                    <div className="flex gap-1">
                        <input type="checkbox" className="accent-teal-600" />
                        <h1 className="text-sm">Remember for 30 days</h1>
                    </div>
                </div>

                <button className="bg-[#03989E] h-[8%] w-2/3 text-white font-semibold rounded-xl">
                    Sign Up
                </button>

                <div className="h-[15%] flex items-center justify-center text-sm gap-2">
                    <h1 className="text-gray-700">Already have an account ? </h1>
                    <a href="#" className="text-[#03989E] font-semibold ">
                        Sign In
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
