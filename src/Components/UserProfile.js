import React from "react";
import NFTCard from "./NFTCard";

const UserProfile = () => {

    return (
        <div className="w-full h-full p-12 text-[#cfcfcf] bg-gray-800 flex flex-col justify-between items-center gap-6 rounded-xl overflow-y-scroll">
            <div className="w-full flex justify-start items-start gap-12">
                {/* Pic */}
                <div className="min-w-[240px] min-h-[240px] bg-[#ebebeb] rounded-full">
                </div>
                <div className="my-4 flex flex-col justify-start items-start text-start flex-grow">
                    <h1 className="text-4xl font-bold uppercase tracking-widest mb-6">Name</h1>
                    <h2 className="text-xl tracking-widest">Meta Address</h2>
                    <p className="text-[14px] tracking-wider">User since 2 days ago</p>
                    <p className="text-[13px] tracking-wide mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros ligula, accumsan lobortis massa a, feugiat fermentum dolor. Nulla facilisi. Pellentesque aliquam lectus quis erat aliquet tempor. Fusce condimentum eu sapien id imperdiet. In sed tellus quam. Maecenas vehicula mauris rutrum eros euismod consequat.
                    </p>
                </div>
            </div>
            <div className="w-full h-full py-12 flex flex-col justify-start items-start">
                <h1 className="text-3xl font-bold uppercase tracking-widest mb-6">My NFTs</h1>
                <div className="pt-4 pb-12 flex justify-start items-center flex-wrap gap-6 rounded-xl">
                    <NFTCard/>
                    <NFTCard/>
                    <NFTCard/>
                    <NFTCard/>
                    <NFTCard/>
                    <NFTCard/>
                    <NFTCard/>
                    <NFTCard/>
                    <NFTCard/>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;