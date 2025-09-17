import React from "react";

const Input = ({ label, placeholder, type, variable }) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="font-semibold text-md" htmlFor={label}>{label}</label>
            <input
                className="text-black bg-[#0acad12f] px-2 py-1 outline-none "
                type={type}
                placeholder={placeholder}
                label={label}
            />
        </div>
    );
};

export default Input;
