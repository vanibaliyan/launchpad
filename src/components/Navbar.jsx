import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="h-[10%] w-full flex px-3 max-md:justify-between">
            <div className="h-full w-[30%] flex items-center">
                <img className="h-full" src="/logo.png" alt="logo" />
                <h1 className="font-bold text-xl">Launchpad</h1>
            </div>
            <div className="h-full w-[40%] flex items-center justify-around max-md:hidden">
                <p className="text-md font-semibold underline decoration-[#03989E] decoration-2">Home</p>
                <p className="text-md font-semibold">About</p>
                <p className="text-md font-semibold">Courses</p>
                <p className="text-md font-semibold">Contact</p>
            </div>
            <div className="h-full w-[30%] flex items-center justify-end">
                <button className="h-2/3 w-1/3 max-md:w-2/3 bg-[#03989E] rounded-xl text-white font-semibold">Login</button>
            </div>
        </div>
    );
};

export default Navbar;
