import React from "react";

const Home = () => {
    return (
        <div className="h-[90%] w-full flex flex-col justify-between">
            <div className="h-[35%] max-md:h-[40%] flex flex-col justify-evenly gap-6">
                <div className="h-auto w-full flex flex-col justify-center gap-4">
                    <h1 className="text-5xl font-semibold text-center">
                        Launch your Tech Journey with Launchpad
                    </h1>
                    <h2 className="text-lg text-center">
                        Launchpad is an Ed-tech platform helping students build
                        their future with hands-on tech skills
                    </h2>
                </div>
                <div className="text-center">
                    <button className="bg-[#03989E] px-6 py-2 rounded-xl text-white text-xl font-semibold">
                        Join Now
                    </button>
                </div>
            </div>
            <div className="relative h-[65%] max-md:h-[60%] w-full flex flex-col items-center md:justify-center">
                <div className="absolute h-full w-full">
                    <div className="absolute border-3 right-10 rounded-lg px-4 py-1 text-lg font-semibold border-[#03989E] z-30">
                        Live Mentorship
                    </div>
                    <div className="absolute border-3 left-10 rounded-lg px-4 py-1 text-lg font-semibold border-[#03989E] z-30">
                        Hands on Project
                    </div>
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
                    <div className="text-[#03989E]  text-xl font-semibold z-30">
                        Not just learning, building
                    </div>
                    <img
                        className="right-10 h-25 w-25"
                        src="/leftarrow.png"
                        alt="leftarrow"
                    />
                </div>
                <div className="absolute w-[40%] flex max-md:flex-col-reverse max-md:items-end md:justify-end max-md:top-[75px] right-2 z-30">
                    <img
                        className="left-10 h-25 w-25"
                        src="/rightarrow.png"
                        alt="rightarrow"
                    />
                    <div className="text-[#03989E] text-right text-xl font-semibold">
                        Where code meets creativity
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
