import React from "react";

const CustomIcon = (props) => {
    const {icon, name, handleClick} = props;

    return (
        <div className="w-[40px] h-[40px] bg-black text-[#ebebeb] flex justify-center items-center rounded-full cursor-pointer"
            onClick={handleClick}>
            {icon}
        </div>
    )
}

export default CustomIcon;