import React from "react";
import { FaHome, FaCartPlus } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import logoBesar from "../assets/logobesar-removebg-preview.png";
import { Link } from "react-router-dom";

const Header = () => {
    return <div>
        <div className="flex p-2 justify-between items-center border shadow-lg rounded-b-lg bg-gray-300">
            <div>
                <Link to="/">
                    <img className="w-32" src={logoBesar} />
                    </Link>
            </div>
            <div className="flex gap-10 mr-10 items-center">
                <Link to="/">
                    <FaHome size={30} className="hover:cursor-pointer hover:scale-110" />
                </Link>
                <FaCartPlus size={30} className="hover:cursor-pointer hover:scale-110" />
                <Link to="settings">
                    <IoSettings size={30} className="hover:cursor-pointer hover:scale-110 hover:rotate-90" />
                </Link>
                <div className="">
                    <div className="flex">
                        <div className="w-12 h-12 relative group">
                            <img className="rounded-full cursor-pointer" src="https://randomuser.me/api/portraits/men/65.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Header;
