import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import Home from "./pages/Home"
import Header from "./pages/Header"
import Settings from "./pages/Settings"
import SettingPagesAccount from "./components/settings/SettingPagesAccount";
import SettingPagesIntegration from "./components/settings/SettingPagesIntegration";
import ProductPage from "./components/product/ProductUnit";
import CobaUnit from "./components/product/CobaUnit";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/product" element={<ProductPage />} />
            <Route path="cobaunit" element={<CobaUnit/>}/>
          <Route path="settings" element={<Settings />}>
            <Route path="account" element={<SettingPagesAccount />} />
            <Route path="integration" element={<SettingPagesIntegration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App