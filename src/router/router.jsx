import React from "react";
import Layout from "../layout/layout";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";

const Router = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<div>Collection Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contacts" element={<div>Contacts Page</div>} />
        </Routes>
      </Layout>
    </>
  );
};

export default Router;
