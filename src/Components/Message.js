import React from "react";

const Message = (props) => {
    const {sender, message, time} = props;

    const currentUser = "ME";

    return (
        <div className="w-full">
            {sender == currentUser ? 
                // Right Side
                <div className="w-fit max-w-[540px] pl-4 pr-14 py-3 bg-gray-900 ml-auto flex justify-between items-center relative rounded-xl rounded-tr-none">
                    <p className="mr-2 text-left">
                        {message}
                    </p>
                    <span className="w-max text-[10px] absolute right-0 bottom-0 -translate-x-[8px] -translate-y-[4px]">{time}</span>
                </div>
            :
                // Left Side
                <div className="flex justify-between items-start gap-2">
                    <div className="w-[40px] h-[40px] bg-[#ebebeb] rounded-full">

                    </div>  
                    <div className="w-fit max-w-[540px] pl-4 pr-14 py-3 bg-gray-900 mr-auto flex justify-between items-center relative rounded-xl rounded-tl-none"> 
                        <p className="mr-2 text-left">
                            {message}
                        </p>
                        <span className="w-max text-[10px] absolute right-0 bottom-0 -translate-x-[8px] -translate-y-[4px]">{time}</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Message;