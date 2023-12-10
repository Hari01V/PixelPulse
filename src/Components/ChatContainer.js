import React from "react";
import { IoSend } from "react-icons/io5";
import Message from "./Message";

const ChatContainer = () => {

    const msgs = [
        {
            sender: "ME",
            message: "This is a sample text",
            time: "10:57 AM"
        },
        {
            sender: "ME",
            message: "This is a sample text, This is a sample text, This is a sample text, This is a sample text, This is a sample text, This is a sample text, This is a sample text",
            time: "10:57 AM"
        },
        {
            sender: "ME",
            message: "This is a sample text",
            time: "10:57 AM"
        },
        {
            sender: "NOT ME",
            message: "This is a sample text",
            time: "10:57 AM"
        },
        {
            sender: "ME",
            message: "This is a sample text",
            time: "10:57 AM"
        },
        {
            sender: "NOT ME",
            message: "This is a sample text, This is a sample text, This is a sample text, This is a sample text, This is a sample text, This is a sample text, This is a sample text",
            time: "10:57 AM"
        },
        {
            sender: "NOT ME",
            message: "This is a sample text",
            time: "10:57 AM"
        },
        {
            sender: "NOT ME",
            message: "This is a sample text",
            time: "10:57 AM"
        },
        {
            sender: "ME",
            message: "This is a sample text",
            time: "10:57 AM"
        },
        {
            sender: "NOT ME",
            message: "This is a sample text, This is a sample text, This is a sample text, This is a sample text, This is a sample text, This is a sample text, This is a sample text",
            time: "10:57 AM"
        },
        {
            sender: "NOT ME",
            message: "This is a sample text",
            time: "10:57 AM"
        },
        {
            sender: "NOT ME",
            message: "This is a sample text",
            time: "10:57 AM"
        },
        {
            sender: "ME",
            message: "This is a sample text",
            time: "10:57 AM"
        },
        {
            sender: "NOT ME",
            message: "This is a sample text, This is a sample text, This is a sample text, This is a sample text, This is a sample text, This is a sample text, This is a sample text",
            time: "10:57 AM"
        },
        {
            sender: "NOT ME",
            message: "This is a sample text",
            time: "10:57 AM"
        },
    ]

    return (
        <div className="w-full h-full text-[#ebebeb] flex flex-col justify-start items-center rounded-xl rounded-tr-md gap-2 overflow-y-hidden">
            {/* Chat Content */}
            <div className="w-full h-full px-6 py-4 bg-gray-800 flex flex-col justify-start items-center gap-2 rounded-xl overflow-y-auto">
                {msgs.length > 0 && (
                    msgs.map(ele => (
                        <Message sender={ele.sender} message={ele.message} time={ele.time}/>
                    ))
                )}
            </div>
            {/* Chat Footer */}
            <div className="w-full h-[72px] flex justify-between items-center gap-2 rounded-xl">
                {/* Input Type */}
                <div className="bg-[#ebebeb] flex justify-between items-center flex-grow rounded-xl">
                    <input className="flex-grow text-black px-6 py-4 outline-none border-none rounded-lg" 
                        placeholder="Type a message..."/>
                    {/* Emoji */}
                </div>
                {/* Send Btn */}
                <div className="px-6 py-4 bg-gray-800 text-[20px] flex justify-center items-center rounded-xl cursor-pointer">
                    <button className="">
                        <IoSend/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatContainer;