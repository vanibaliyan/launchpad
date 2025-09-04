import React, { useState } from "react";
import Navbar from "./landing/Navbar";
import Home from "./landing/Home";
import About from "./landing/About";
import Courses from "./landing/Courses";
import Contact from "./landing/Contact";

const LandingPage = () => {
    const [currentPage, setCurrentPage] = useState("Home");
    return (

        <div className="h-full w-full flex flex-col justify-center items-center overflow-hidden">
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div className="h-[88%] w-full overflow-y-auto">
                {currentPage == "Home" ? (
                    <Home />
                ) : currentPage == "About" ? (
                    <About />
                ) : currentPage == "Courses" ? (
                    <Courses />
                ) : currentPage == "Contact" ? (
                    <Contact />
                ) : (
                    ""
                )}

            </div>
        </div>
    
    );
};

export default LandingPage;
