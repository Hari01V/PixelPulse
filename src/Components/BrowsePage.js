import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import CommunityCard from "./CommunityCard";

const BrowsePage = (props) => {

    return (
        <div className="w-full h-full p-1 pr-0 rounded-2xl flex flex-col justify-between items-center gap-2">
            {/* Header */}
            <div className="w-full px-6 py-6 bg-violet-800 text-white flex justify-between items-center gap-4 rounded-xl">
                <h1 className="text-3xl font-bold capitalize">Browse</h1>
                {/* Search box */}
                <div className="w-full px-4 py-2 bg-white flex justify-between items-center gap-2 rounded-lg">
                    <input className="w-[30px] text-black flex-grow outline-none border-none" 
                        placeholder="Search..."/>
                </div>
            </div>
            <div className="w-full h-full px-6 py-6 bg-violet-800 text-white flex justify-start items-center flex-wrap gap-6 rounded-xl overflow-y-auto">
                <CommunityCard/>
                <CommunityCard/>
                <CommunityCard/>
                <CommunityCard/>
                <CommunityCard/>
                <CommunityCard/>
                <CommunityCard/>
                <CommunityCard/>
                <CommunityCard/>
            </div>
        </div>
    )
}

export default BrowsePage;