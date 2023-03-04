import React from "react";
import "./NavBar";
import "./Footer";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <NavBar />
      <section className="min-h-screen">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default Main;
