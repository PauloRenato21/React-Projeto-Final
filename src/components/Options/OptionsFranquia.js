import React, { useState, useEffect } from "react";
import api from "API/Api";

export default function OptionsFranquia() {
  const [franquia, setFranquia] = useState([]);

  useEffect(() => {
    api.get("http://api.com/franquia").then((res) => {
      const dadoFranquia = res.data;
      setFranquia(dadoFranquia);
    });
  }, []);

  return (
    <>
      {franquia.map((count) => (
        <option key={count.id} value={count.id}>
          {count.nome}
        </option>
      ))}
    </>
  );
}
