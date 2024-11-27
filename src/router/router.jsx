import React from "react";
import Layout from "../layout/layout";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/collection" element={<div>Collection Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contacts" element={<div>Contacts Page</div>} />
        </Routes>
      </Layout>
    </>
  );
};

export default Router;
