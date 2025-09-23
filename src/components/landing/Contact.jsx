import React from "react";

const Contact = () => {
    return (
        <div className="h-[100%] w-full flex flex-col justify-center items-center">
            <div className="h-3/4 w-1/3 border-3 border-[#03989E] flex flex-col  items-center max-md:w-5/6 max-md:h-2/3">
                <div className="h-[15%] w-full flex flex-col justify-center items-center">
                    <h1 className="font-semibold text-xl">Contact Us</h1>
                </div>
                <div className="h-[70%] w-5/6 flex flex-col items-center justify-center gap-5 max-md:w-3/4 ">
                    <div className="h-auto w-full flex gap-2 max-md:flex-wrap">
                        <input
                            className="h-auto w-full text-black text-sm border border-[#05acb2] p-2 outline-none "
                            type="text"
                            placeholder="Name"
                        />
                        <input
                            className="h-auto w-full text-black text-sm border border-[#05acb2] p-2 outline-none "
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="h-aito w-full flex gap-2 max-md:flex-wrap">
                        <input
                            className="h-auto w-full text-black text-sm border border-[#05acb2] p-2 outline-none "
                            type="number"
                            placeholder="Contact Number"
                        />
                        <input
                            className="h-auto w-full text-black text-sm border border-[#05acb2] p-2 outline-none "
                            type="text"
                            placeholder="Subject"
                        />
                    </div>
                    <input
                        className="h-24 w-full text-black text-sm border border-[#05acb2] p-2 outline-none"
                        type="textarea"
                        placeholder="Message"
                    />
                </div>

                <button className="h-auto bg-[#03989E] w-2/3 py-1 text-white font-semibold rounded">
                    Send Message
                </button>
            </div>
        </div>
    );
};

export default Contact;
