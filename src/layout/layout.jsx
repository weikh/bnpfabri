import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const Layout = ({ children }) => {
  return (
    <div className="max-w-[1490px] px-5 border border-black mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
