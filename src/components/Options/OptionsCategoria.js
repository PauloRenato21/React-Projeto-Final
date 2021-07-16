import React, { useState, useEffect } from "react";
import api from "API/Api";

export default function OptionsCategoria() {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    api.get("http://api.com/categoria").then((res) => {
      const dadoCategoria = res.data;
      setCategoria(dadoCategoria);
    });
  }, []);

  return (
    <>
      {categoria.map((count) => (
        <option key={count.id} value={count.id}>
          {count.nome}
        </option>
      ))}
    </>
  );
}
