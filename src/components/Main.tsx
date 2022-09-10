import React from "react";
import "./NavBar";
import "./Footer";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { getCharacters, getAccounts } from "../services/getCharacters";
const Main = () => {
  return (
    <>
      <NavBar />
      <button onClick={getCharacters}>Get Characters</button>
      <button onClick={getAccounts}>Get Accounts</button>
      <Footer />
    </>
  );
};

export default Main;
