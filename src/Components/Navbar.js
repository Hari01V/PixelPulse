import React from "react";
import { BiUser } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { BiHomeAlt2 } from "react-icons/bi";
import CustomIcon from "../Helpers/CustomIcon";

const Navbar = () => {

    return (
        <div className="w-[100px] max-w-[260px] h-full px-2 py-6 bg-violet-500 rounded-2xl flex flex-col justify-between items-center">
            {/* Navbar Logo */}
            <CustomIcon icon={<FaReact/>} name={"Logo"} handleClick={()=>{}}/>
            {/* Navbar Options */}
            <div className="">
                <ul className="flex flex-col justify-between items-center gap-4">
                    <CustomIcon icon={<BiHomeAlt2/>} name="Home" handleClick={()=>{}}/>
                    <CustomIcon icon={<BiHomeAlt2/>} name="Home" handleClick={()=>{}}/>
                    <CustomIcon icon={<BiHomeAlt2/>} name="Home" handleClick={()=>{}}/>
                    <CustomIcon icon={<BiHomeAlt2/>} name="Home" handleClick={()=>{}}/>
                </ul>
            </div>
            {/* Navbar Footer */}
            <div className="">
                <CustomIcon icon={<BiUser/>} name={"Profile"} handleClick={()=>{}}/>
            </div>
        </div>
    )
}

export default Navbar;