import React from "react"

const Navbar = ({currentPage, setCurrentPage}) => {
    return (
        <div className="h-[10%] w-full flex px-3 max-md:justify-between top-0 left-0  bg-white shadow-md z-50  py-2">
            <div className="h-full w-[30%] flex items-center">
                <img className="h-full" src="/logo.png" alt="logo" />
                <h1 className="font-bold text-xl">Launchpad</h1>
            </div>
            <div className="h-full w-[40%] flex items-center justify-around max-md:hidden">
                <button onClick={() => (setCurrentPage("Home"))} className={`text-md font-semibold ${currentPage=="Home" ? "underline decoration-[#03989E]" : ""}`}>Home</button>
                <button onClick={() => (setCurrentPage("About"))} className={`text-md font-semibold ${currentPage=="About" ? "underline decoration-[#03989E]" : ""}`}>About</button>
                <button onClick={() => (setCurrentPage("Courses"))} className={`text-md font-semibold ${currentPage=="Courses" ? "underline decoration-[#03989E]" : ""}`}>Courses</button>
                <button onClick={() => (setCurrentPage("Contact"))} className={`text-md font-semibold ${currentPage=="Contact" ? "underline decoration-[#03989E]" : ""}`}>Contact</button>
            </div>
            <div className="h-full w-[30%] flex items-center justify-end">
                <button className="h-full w-1/3 max-md:w-2/3 bg-[#03989E] rounded-xl text-white font-semibold">SignIn</button>
            </div>
        </div>
    );
};

export default Navbar;
