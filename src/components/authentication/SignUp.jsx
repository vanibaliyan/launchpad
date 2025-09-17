import React from "react";
import Input from "./utils/Input";

const SignUp = () => {
    return (
        <div className="h-full w-full flex flex-col ">
            <div className="h-[10%] w-auto flex py-2 items-center ">
                <img className="h-full" src="logo.png" alt="logo" />
                <h1 className="font-bold text-xl">Launchpad</h1>
            </div>
            <div className="h-[10%] flex flex-col items-center justify-center">
                <h1 className="font-bold text-2xl">Create an account</h1>
                <h1 className="font-md text-md">
                    Welcome back! Please enter your details.
                </h1>
            </div>
            <div className="h-[65%] flex flex-col justify-center gap-5 px-5 ">
                <Input
                    label={"Name"}
                    type={"text"}
                    placeholder={"Enter Name"}
                />
                <Input
                    label={"Email"}
                    type={"email"}
                    placeholder={"Enter Email"}
                />
                <Input
                    label={"Password"}
                    type={"password"}
                    placeholder={"Enter Password"}
                />
                <div className="flex gap-2">
                    <input type="checkbox" />
                    <h1>Must be at least 8 characters</h1>
                </div>
                <button className="text-white text-lg font-semibold bg-[#03989E] border rounded-xl px-4 py-1 text-center">
                    Sign Up
                </button>
            </div>
            <div className="h-[10%] flex justify-center items-center ">
                    <h className="font-semibold">Already have an account?</h>
                    <button>SignIn</button>
                </div>
        </div>
    );
};

export default SignUp;
