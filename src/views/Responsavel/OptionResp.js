import React, { useState, useEffect } from "react";
import api from "API/Api";

export default function OptionResp() {
  const [responsavel, setResponsavel] = useState([]);

  useEffect(() => {
    api.get("http://api.com/responsavel").then((res) => {
      const dadoResp = res.data;
      setResponsavel(dadoResp);
    });
  }, []);

  return (
    <>
      {responsavel.map((count) => (
        <option key={count.id} value={count.id}>
          {count.nome}
        </option>
      ))}
    </>
  );
}
