import React from "react";

const NFTCard = (props) => {
    const {} = props;

    return (
        <div className="bg-gray-950 px-8 py-4 rounded-xl flex flex-col justify-center items-center gap-4 shadow-md shadow-white transition-all duration-100 hover:scale-[102%]">
            {/* Pic */}
            <div className="w-[160px] h-[160px] bg-[#ebebeb] rounded-full">

            </div>
            <h1 className="text-[20px]">NFT Name</h1>
            <button className="w-full px-6 py-2 bg-black rounded-xl text-[12px] tracking-widest uppercase shadow-md shadow-white hover:border-[1px] hover:border-[#cfcfcf]">View</button>
        </div>
    )
}

export default NFTCard;