import React, { useState, createContext } from "react";

export const charContext = createContext();

export const CharacterProvider = ({ children }) => {
  return <charContext.Provider value={{}}>{children}</charContext.Provider>;
};
