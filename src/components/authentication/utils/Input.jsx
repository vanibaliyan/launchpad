import React from "react";

const Input = ({ label, placeholder, type, variable, img }) => {
    return (
        <div className="h-full w-full flex flex-col gap-1">
            <label className="h-auto w-full font-semibold text-md" htmlFor={label}>
                {label}
            </label>
            <div className="h-auto w-full relative flex items-center ">
                <img className="absolute left-3 w-5 h-5 " src={img} />
                <input
                    className="h-auto w-full text-black text-sm bg-[#E6F7F7] px-10 py-2 border rounded-xl outline-none "
                    type={type}
                    placeholder={placeholder}
                    label={label}
                />
            </div>
        </div>
    );
};

export default Input;
