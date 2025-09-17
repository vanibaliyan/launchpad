import React from "react";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/authentication/SignIn";

const App = () => {
    return (
        <div className="h-screen w-screen flex flex-col flex-item-center justify-center items-center">
            {/* <LandingPage /> */}
            <SignIn/>
        </div>
    );
};

export default App;
