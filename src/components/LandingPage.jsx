import React from "react";
import Navbar from "./landing/Navbar";
import Home from "./landing/Home";

const LandingPage = () => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <Navbar />
            <Home />
        </div>
    );
};

export default LandingPage;
