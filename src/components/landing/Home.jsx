import React from "react";

const Home = () => {
    return (
        <div className="h-[90%] w-full flex flex-col justify-between max-md:gap-3">
            <div className="h-[35%]  flex flex-col justify-evenly max-md:h-[40%] max-md:gap-6">
                <div className="h-auto w-full flex flex-col justify-center px-4 gap-4">
                    <h1 className="text-5xl font-semibold text-center max-md:text-3xl">
                        Launch your Tech Journey with Launchpad
                    </h1>
                    <h2 className="text-lg text-center max-md:text-base">
                        Launchpad is an Ed-tech platform helping students build
                        their future with hands-on tech skills
                    </h2>
                </div>
                <div className="text-center">
                    <button className="bg-[#03989E] px-6 py-2 rounded-xl text-white text-xl font-semibold max-md:text-base max-md:px-3 max-md:py-1">
                        Join Now
                    </button>
                </div>
            </div>
            <div className="relative h-[65%] max-md:h-[60%] w-full flex flex-col items-center md:justify-center">
                <div className="absolute h-auto w-full top-0 flex justify-around px-2 gap-2">
                    <p className="border-2 rounded-lg px-4 py-1 text-lg text-center font-semibold border-[#03989E] z-30  max-md:text-base">
                        Live Mentorship
                    </p>
                    <p className="border-2 rounded-lg px-4 py-1 text-lg text-center font-semibold border-[#03989E] z-30  max-md:text-base">
                        Hands on Project
                    </p>
                </div>
                <div className="relative h-full w-full max-md:top-[40px] flex justify-center items-center overflow-hidden z-10">
                    <div className="absolute h-full w-1/3 max-md:w-4/5 top-[100px] max-md:top-[130px] rounded-t-full border-t-4 border-l-4 border-r-4 border-top border-[#037579] bg-[#03989E]"></div>
                    <img
                        className="h-auto w-1/3 max-md:w-full absolute top-0"
                        src="/ik.png"
                        alt="hero"
                    />
                </div>
                {/* <div className="flex items-center justify-center">
                    <button className="mt-[-50px] bg-[#03989E] border-2 border-white text-white text-lg font-semibold  rounded-lg px-4 py-1 z-20">
                        Get Certified
                    </button>
                </div> */}
                <div className="absolute w-[40%] flex max-md:flex-col max-md:top-[75px] left-4 z-30">
                    <div className="text-[#03989E]  text-xl font-semibold z-30  max-md:text-base">
                        Not just learning, building
                    </div>
                    <img
                        className="right-10 h-25 w-25 max-md:w-20"
                        src="/leftarrow.png"
                        alt="leftarrow"
                    />
                </div>
                <div className="absolute w-[40%] flex max-md:flex-col-reverse max-md:items-end md:justify-end max-md:top-[75px] right-2 z-30">
                    <img
                        className="left-10 h-25 w-25 max-md:w-20"
                        src="/rightarrow.png"
                        alt="rightarrow"
                    />
                    <div className="text-[#03989E] text-right text-xl font-semibold  max-md:text-base">
                        Where code meets creativity
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
