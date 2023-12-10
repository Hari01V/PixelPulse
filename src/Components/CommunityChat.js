import React, { useEffect, useRef, useState } from "react";
import ChatContainer from "./ChatContainer";
import { SlOptionsVertical } from "react-icons/sl";

const CommunityChat = () => {
    const [optionsOpen, setOptionsOpen] = useState(false);
    const optionsMenuRef = useRef();

    const toggleOptionsMenu = (ele) => {
        ele.stopPropagation();
        setOptionsOpen(!optionsOpen);
    }

    useEffect(() => {
        document.addEventListener('click', (ele) => {
            ele.stopPropagation();
            setOptionsOpen(false);
        });
    }, []);

    return (
        <div className="w-full h-full p-1 pl-0 rounded-2xl flex flex-col justify-between items-center gap-2">
            {/* CommunityChat Header */}
            <div className="w-full h-[72px] px-6 py-4 bg-gray-800 text-[#ebebeb] flex justify-between items-center gap-4 rounded-xl">
                {/* Pic */}
                <div className="w-[48px] h-[48px] bg-[#ebebeb] rounded-full">

                </div>
                <div className="flex flex-col justify-between items-start flex-grow">
                    <h1 className="text-lg font-bold capitalize tracking-widest">Name</h1>
                </div>
                {/* Options */}
                <div className="min-w-[40px] w-[40px] h-[40px] text-[#ebebeb] text-[18px] flex justify-center items-center rounded-full relative">
                    <div className="min-w-[40px] w-[40px] h-[40px] text-[#ebebeb] text-[18px] flex justify-center items-center cursor-pointer rounded-full hover:bg-gray-900"
                        onClick={(ele) => toggleOptionsMenu(ele)}
                        ref={optionsMenuRef}>
                        <SlOptionsVertical/>
                    </div>
                    {optionsOpen && 
                        <div className="min-w-[200px] bg-gray-950 py-1 rounded-lg z-10 absolute top-[120%] right-[50%]">
                            <ul className="text-[16px] flex flex-col justify-center items-center gap-[1px] tracking-wide">
                                <li className="w-full px-4 py-2 cursor-pointer hover:bg-gray-800">LogOut</li>
                                <li className="w-full px-4 py-2 cursor-pointer hover:bg-gray-800">LogOut</li>
                                <li className="w-full px-4 py-2 cursor-pointer hover:bg-gray-800">LogOut</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
            {/* Chat */}
            <ChatContainer/>
        </div>
    )
}

export default CommunityChat;