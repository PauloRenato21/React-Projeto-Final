import React, { useState, useEffect } from "react";
import api from "API/Api";

export default function OptionsClube() {
  const [clube, setClube] = useState([]);

  useEffect(() => {
    api.get("http://api.com/clube").then((res) => {
      const dadoClube = res.data;
      setClube(dadoClube);
    });
  }, []);

  return (
    <>
      {clube.map((count) => (
        <option key={count.id} value={count.id}>
          {count.nome}
        </option>
      ))}
    </>
  );
}
