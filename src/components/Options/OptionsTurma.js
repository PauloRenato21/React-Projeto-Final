import React, { useState, useEffect } from "react";
import api from "API/Api";

export default function OptionsTurma() {
  const [turma, setTurma] = useState([]);

  useEffect(() => {
    api.get("http://api.com/turma").then((res) => {
      const dadoTurma = res.data;
      setTurma(dadoTurma);
    });
  }, []);

  return (
    <>
      {turma.map((count) => (
        <option key={count.id} value={count.id}>
          {count.nome}
        </option>
      ))}
    </>
  );
}
