import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-[1490px] px-5 border border-black mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
