import React from "react";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/authentication/SignUp";
import SignIn from "./components/authentication/SignIn";

const App = () => {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <LandingPage />
            {/* <SignIn/> */}
            {/* <SignUp/> */}
        </div>
    );
};

export default App;
