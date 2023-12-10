import React from "react";
import { BiUser } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { BiHomeAlt2 } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import CustomIcon from "../Helpers/CustomIcon";
import { FaPeopleGroup } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { IoMdPulse } from "react-icons/io";

const Navbar = (props) => {
    const {currentNav, setCurrentNav} = props;

    const navigate = useNavigate();

    return (
        <div className="w-[100px] max-w-[260px] h-full px-2 py-6 bg-gray-800 rounded-2xl flex flex-col justify-between items-center">
            {/* Navbar Logo */}
            <CustomIcon icon={<IoMdPulse/>} name={"Logo"} handleClick={() => {
                navigate('/')
            }}/>
            {/* Navbar Options */}
            <div className="">
                <ul className="flex flex-col justify-between items-center gap-4">
                    <CustomIcon icon={<BiHomeAlt2/>} name="home" handleClick={() => {
                        navigate('/');
                    }}/>
                    <CustomIcon icon={<FaPeopleGroup/>} name="communities" handleClick={() => {
                        navigate('/communities')
                    }}/>
                    <CustomIcon icon={<ImSearch/>} name="browse" handleClick={() => {
                        navigate('/browse')
                    }}/>
                </ul>
            </div>
            {/* Navbar Footer */}
            <div className="">
                <CustomIcon icon={<BiUser/>} name={"Profile"} handleClick={() => {
                    navigate('/profile')
                }}/>
            </div>
        </div>
    )
}

export default Navbar;