import React from "react";
import hero from "../assets/ik.png";
import leftarrow from "../assets/leftarrow.png";
import rightarrow from "../assets/rightarrow.png";

const Home = () => {
    return (
        <div className="px-4 md:px-8 mt-10 h-[90%]">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-semibold text-center">
                    Launch your Tech Journey with Launchpad
                </h1>
                <h2 className="text-md text-center">
                    Launchpad is an edtech platform helping students build their
                    future with hands-on tech skills
                </h2>
                <div className="text-center py-6">
                    <button className="bg-[#03989E] px-6 py-1 rounded-xl text-white text-xl font-semibold">
                        Join Now
                    </button>
                </div>
            </div>
            <div className="relative flex flex-col items-center md:items-stretch">
                <div className="absolute border-3 right-10 md:right-40 rounded-lg px-4 py-1 text-lg font-semibold border-[#03989E] z-30">
                    Live Mentorship
                </div>
                <div className="absolute border-3 left-10 md:left-40 rounded-lg px-4 py-1 text-lg font-semibold border-[#03989E] z-30">
                    Hands on Project
                </div>

                <div className="relative w-full flex justify-center items-center">
                    <div className="bottom-0 w-[300px] h-[150px] md:w-[600px] md:h-[250px] mt-6 rounded-t-full border-t-4 border-l-4 border-r-4 border-top border-[#037579] bg-[#03989E]"></div>
                    <img
                        className="absolute bottom-0 -top-12 z-10 w-110 h-80 object-cover object-top overflow-hidden"
                        src={hero}
                        alt="hero"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button className="mt-[-50px] bg-[#03989E] border-2 border-white text-white text-lg font-semibold  rounded-lg px-4 py-1 z-20">
                        Get Certified
                    </button>
                </div>
                <div className="absolute flex left-4 bottom-20 z-30">
                    <div className="text-[#03989E] mt-10 text-xl font-semibold ">
                        Not just learning , building
                    </div>
                    <img
                        className="right-20 h-25 w-25"
                        src={leftarrow}
                        alt="leftarrow"
                    />
                </div>
                <div className="absolute flex right-2 bottom-20 z-30">
                    <img
                        className="left-10 h-25 w-25"
                        src={rightarrow}
                        alt="rightarrow"
                    />
                    <div className="text-[#03989E] mt-10 text-xl font-semibold">
                        Where code meets creativity
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
