import React, { useState } from "react";

const Buscador = ({ keyword, setKeyword }: any) => {
  const [input, setInput] = useState(keyword);
  const handleInput = (e: any) => {
    setInput(e.target.value);
  };
  const onBlur = () => {
    setKeyword(input);
  };
  return (
    <div className="flex my-5 justify-center">
      <form>
        <input
          className=" rounded-2xl"
          type="text"
          placeholder="Ingresa tu búsqueda"
          value={input}
          onChange={handleInput}
          onBlur={onBlur}
        />
      </form>
    </div>
  );
};

export default Buscador;
