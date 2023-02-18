import React, { useEffect, useState } from "react";
import "./NavBar";
import "./Footer";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { getStorage } from "../services/storage";
import { getUsers } from "../services/db";

const Main = () => {
  const [network, setNetwork] = useState([{}]);
  useEffect(() => {
    getNetwork();
    getUser();
  }, []);

  const getUser = () => {
    getStorage();
  };
  const getNetwork = async () => {
    const users = await getUsers();
    setNetwork(users);
  };
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
