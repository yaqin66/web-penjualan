import React from "react";
import { FaGithub, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const SettingPagesIntegration = () => {
    return (
        <div className="w-full grid justify-center items-center">
            <div className=" gap-10 grid">
                <div className="group items-center flex">
                    <FaGithub size={50} className="z-10 cursor-pointer hover:scale-105 transition-transform duration-300"/>
                    <h1 className="z-0 text-3xl opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-2 transition-all duration-700 ml-2">Github</h1>
                </div>
                <div className="group items-center flex">
                    <FaFacebook size={50} className="z-10 cursor-pointer hover:scale-105 transition-transform duration-300"/>
                    <h1 className="z-0 text-3xl opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-2 transition-all duration-700 ml-2">Facebook</h1>
                </div>
                <div className="group items-center flex">
                    <FaYoutube size={50} className="z-10 cursor-pointer hover:scale-105 transition-transform duration-300"/>
                    <h1 className="z-0 text-3xl opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-2 transition-all duration-700 ml-2">Youtube</h1>
                </div>
                <div className="group items-center flex cursor-pointer">
                    <FaInstagram size={50} className="z-10 cursor-pointer hover:scale-105 transition-transform duration-300"/>
                    <h1 className="z-0 text-3xl opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-2 transition-all duration-700 ml-2">Instagram</h1>
                </div>
            </div>
        </div>
    );
};

export default SettingPagesIntegration;
