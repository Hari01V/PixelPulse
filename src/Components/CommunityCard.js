import React from "react";

const CommunityCard = (props) => {
    const {} = props;

    return (
        <div className="bg-red-500 px-8 py-4 rounded-xl flex flex-col justify-center items-center gap-4">
            {/* Pic */}
            <div className="w-[160px] h-[160px] bg-white rounded-full">

            </div>
            <h1 className="text-[20px]">Community Name</h1>
            <button className="w-full px-6 py-2 bg-green-600 rounded-xl">Join</button>
        </div>
    )
}

export default CommunityCard;