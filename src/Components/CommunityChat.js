import React from "react";
import ChatContainer from "./ChatContainer";
import { SlOptionsVertical } from "react-icons/sl";

const CommunityChat = () => {

    return (
        <div className="w-full h-full p-1 pl-0 rounded-2xl flex flex-col justify-between items-center gap-2">
            {/* CommunityChat Header */}
            <div className="w-full h-[72px] px-6 py-4 bg-violet-800 text-white flex justify-between items-center gap-4 rounded-xl">
                {/* Pic */}
                <div className="w-[48px] h-[48px] bg-white rounded-full">

                </div>
                <div className="flex flex-col justify-between items-start flex-grow">
                    <h1 className="text-lg font-bold capitalize">Name</h1>
                </div>
                {/* Options */}
                <div className="min-w-[40px] w-[40px] h-[40px] text-white text-[18px] flex justify-center items-center rounded-full cursor-pointer">
                    <SlOptionsVertical/>
                </div>
            </div>
            {/* Chat */}
            <ChatContainer/>
        </div>
    )
}

export default CommunityChat;