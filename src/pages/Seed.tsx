import React from "react";
import { getAllCharacters } from "../services/getCharacters";

const Seed = () => {
  return (
    <section>
      <button
        onClick={(e) => {
          e.preventDefault();
          getAllCharacters();
        }}
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        getAllCharacters
      </button>
    </section>
  );
};

export default Seed;
