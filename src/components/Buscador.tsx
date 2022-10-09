import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Buscador = ({ parametro, setBuscador, data }: any) => {
  const [update, setUpdate] = useState("");
  let location = useLocation();
  const handleChange = (e: any) => {
    e.preventDefault();
    setUpdate(e.target.value);
  };

  useEffect(() => {
    const filterSearch = (busqueda: any) => {
      let resultadoFiltro = [];
      if (parametro === "user") {
        resultadoFiltro = data.filter((character: any) => {
          if (
            character.name
              .toString()
              .toLowerCase()
              .includes(busqueda.toString().toLowerCase())
          ) {
            return character;
          } else if (
            character.username
              .toString()
              .toLowerCase()
              .includes(busqueda.toString().toLowerCase())
          ) {
            return character;
          }
        });
      }
      setBuscador(resultadoFiltro);
    };
    filterSearch(update);
    return () => {
      setBuscador([]);
    };
  }, [parametro, update, location]);
  return (
    <div className="flex rounded-md my-5 justify-center">
      <form onChange={handleChange}>
        <input type="text" placeholder="Ingresa tu búsqueda" />
      </form>
    </div>
  );
};

export default Buscador;
