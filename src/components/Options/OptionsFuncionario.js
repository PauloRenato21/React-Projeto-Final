import React, { useState, useEffect } from "react";
import api from "API/Api";

export default function OptionsFuncionario() {
  const [funcionario, setFuncionario] = useState([]);

  useEffect(() => {
    api.get("http://api.com/funcionario").then((res) => {
      const dadoFuncionario = res.data;
      setFuncionario(dadoFuncionario);
    });
  }, []);

  return (
    <>
      {funcionario.map((count) => (
        <option key={count.id} value={count.id}>
          {count.nome}
        </option>
      ))}
    </>
  );
}
