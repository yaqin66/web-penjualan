import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import React from "react";
import SettingPagesSidebar from "./SettingPagesSidebar";
import SettingPagesAccount from "./SettingPagesAccount";
import SettingPagesIntegration from "./SettingPagesIntegration";

const SettingPages = () => {
    return (
        <div className="flex grid-cols-2">
            <SettingPagesSidebar />
            <Outlet/>
        </div>
    );
};

export default SettingPages;
