import React from "react";
import CommunityChat from "./CommunityChat";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineAdd } from "react-icons/md";
import CommunityMenuItem from "./CommunityMenuItem";

const Community = () => {

    return (
        <div className="h-full w-full rounded-2xl flex justify-between items-center gap-2">
            {/* Community Menu */}
            <div className="w-[30%] max-w-[320px] h-full p-1 rounded-2xl flex flex-col justify-between items-center gap-2">
                {/* Menu Header */}
                <div className="w-full px-3 py-4 bg-violet-800 text-white flex justify-between items-center gap-4 rounded-xl">
                    <h1 className="text-lg font-bold capitalize">Hub</h1>
                    {/* Search box */}
                    <div className="w-full p-2 bg-white flex justify-between items-center gap-2 rounded-lg">
                        <input className="w-[30px] text-black flex-grow outline-none border-none" 
                            placeholder="Search..."/>
                        <BiSearchAlt2 className="text-black text-lg cursor-pointer"/>
                    </div>
                    {/* New Community Btn */}
                    <div className="min-w-[40px] w-[40px] h-[40px] bg-black text-white flex justify-center items-center rounded-full cursor-pointer">
                        <MdOutlineAdd/>
                    </div>
                </div>
                {/* Menu Items */}
                <div className="w-full h-full px-6 py-4 bg-violet-800 text-white flex flex-col justify-start items-center rounded-xl">
                    <CommunityMenuItem/>
                    <CommunityMenuItem/>
                    <CommunityMenuItem/>
                </div>
            </div>
            <CommunityChat/>
        </div>
    )
}

export default Community;