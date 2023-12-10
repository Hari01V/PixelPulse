import React from "react";

const CommunityMenuItem = () => {

    return (
        <div className="w-full flex justify-start items-center gap-2 px-2 py-4 border-b-[1px] cursor-pointer hover:backdrop-brightness-[80%]">
            {/* Pic */}
            <div className="w-[48px] h-[48px] bg-[#ebebeb] rounded-full">

            </div>
            <div className="flex flex-col justify-center items-start flex-grow">
                <h2 className="font-bold text-[16px] tracking-widest">Name</h2>
                <p className="text-[13px]">Have a good day!</p>
            </div>
            <div className="h-full flex flex-col justify-around items-end">
                <p className="text-[12px] ">10:27 AM</p>
                <div className="w-[12px] h-[12px] text-[12px] text-[#ebebeb] bg-orange-700 p-2 flex justify-center items-center rounded-full">
                    8
                </div>
            </div>
        </div>
    )
}

export default CommunityMenuItem;