import React from "react";

const Buscador = ({ keyword, setKeyword }: any) => {
  const handleChange = (e: any) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  return (
    <div className="flex my-5 justify-center">
      <form onChange={handleChange}>
        <input
          className=" rounded-2xl"
          type="text"
          placeholder="Ingresa tu búsqueda"
          value={keyword}
        />
      </form>
    </div>
  );
};

export default Buscador;
