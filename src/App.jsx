import React from "react";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/authentication/SignUp";

const App = () => {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            {/* <LandingPage /> */}
            <SignUp/>
        </div>
    );
};

export default App;
