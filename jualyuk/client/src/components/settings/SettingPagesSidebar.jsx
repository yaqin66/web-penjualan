import React, { useState } from "react";
import { MdManageAccounts, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


const SettingPagesSidebar = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
         <div className={`border h-screen transition-all duration-300 ${isOpen ? 'w-48' : 'w-12'} relative`}>
             <div className="flex justify-end p-2 ml-10">
                 {isOpen ? (
                    <div
                        className="w-fit flex p-2  transition-transform duration-300 cursor-pointer"
                        onClick={toggleSidebar}
                    >
                        <MdKeyboardDoubleArrowRight size={40} />
                    </div>
                ) : (
                    <div
                        className="w-fit flex p-2  transition-transform duration-300 cursor-pointer"
                        onClick={toggleSidebar}
                    >
                        <MdKeyboardDoubleArrowLeft size={40} />
                    </div>
                )}
            </div> 
            {isOpen && (
                <div className="absolute mt-52">
                    <Link to="account">
                        <div className="flex items-center mt-10 ml-3 cursor-pointer transition-transform duration-300 hover:scale-110 hover:translate-x-4">
                            <MdManageAccounts size={30} />
                            <h1 className="ml-2">Account</h1>
                        </div>
                    </Link>
                    <div className="flex items-center mt-10 ml-3 cursor-pointer hover:scale-110 transition-transform duration-300 hover:translate-x-4">
                        <IoMdNotifications size={30} />
                        <h1 className="ml-2">Notification</h1>
                    </div>
                    <Link to="integration">
                        <div className="flex items-center mt-10 ml-3 cursor-pointer hover:scale-110 transition-transform duration-300 hover:translate-x-4">
                            <IoShareSocialSharp size={30} />
                            <h1 className="ml-2">Integration</h1>
                        </div>
                    </Link>
                </div>
            )}
        </div>
        
    );
};

export default SettingPagesSidebar;
