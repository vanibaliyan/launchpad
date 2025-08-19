import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex h-[10%] p-2 max-md:justify-between">
            <div className="flex w-[20%] h-[10%] items-center">
                <img className="w-[30%] h-[30%]" src={logo} alt="logo" />
                <h1 className="font-bold text-xl p-4">Launchpad</h1>
            </div>
            <div className="flex items-center justify-center w-[60%] max-md:hidden">
                <p className="px-6 text-md font-semibold underline decoration-[#03989E] decoration-2">Home</p>
                <p className="px-6 text-md font-semibold">About</p>
                <p className="px-6 text-md font-semibold">Courses</p>
                <p className="px-6 text-md font-semibold">Contact</p>
            </div>
            <div className="flex items-center justify-center w-[20%]">
                <button className="bg-[#03989E] px-6 py-1 rounded-xl text-white font-semibold">Login</button>
            </div>
        </div>
    );
};

export default Navbar;
