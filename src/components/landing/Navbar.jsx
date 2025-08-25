import React from "react"

const Navbar = () => {
    return (
        <div className="h-[10%] w-full flex px-3 max-md:justify-between">
            <div className="h-full w-[30%] flex items-center">
                <img className="h-full" src="/logo.png" alt="logo" />
                <h1 className="font-bold text-xl">Launchpad</h1>
            </div>
            <div className="h-full w-[40%] flex items-center justify-around max-md:hidden">
                <button className="text-md font-semibold underline decoration-[#03989E] decoration-2">Home</button>
                <button className="text-md font-semibold">About</button>
                <button className="text-md font-semibold">Courses</button>
                <button className="text-md font-semibold">Contact</button>
            </div>
            <div className="h-full w-[30%] flex items-center justify-end">
                <button className="h-2/3 w-1/3 max-md:w-2/3 bg-[#03989E] rounded-xl text-white font-semibold">Login</button>
            </div>
        </div>
    );
};

export default Navbar;
