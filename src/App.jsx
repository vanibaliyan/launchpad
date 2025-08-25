import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <Navbar />
            <Home />
        </div>
    );
};

export default App;
