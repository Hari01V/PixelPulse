import React from "react";
import Navbar from "./Navbar";
import Community from "./Community";

const Home = () => {

    return (
        <div className="h-screen w-screen bg-red-600 p-8 flex justify-between items-center gap-2">
            <Navbar/>
            <Community/>
        </div>
    )
}

export default Home;