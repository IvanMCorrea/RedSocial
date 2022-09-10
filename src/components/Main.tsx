import React from "react";
import "./NavBar";
import "./Footer";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { getCharacters, getAccounts } from "../services/getCharacters";
import { getUser } from "../services/db";
const Main = () => {
  return (
    <>
      <NavBar />
      <Footer />
    </>
  );
};

export default Main;
