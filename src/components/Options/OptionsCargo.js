import React, { useState, useEffect } from "react";
import api from "API/Api";

export default function OptionsCargo() {
  const [cargo, setCargo] = useState([]);

  useEffect(() => {
    api.get("http://api.com/cargo").then((res) => {
      const dadoCargo = res.data;
      setCargo(dadoCargo);
    });
  }, []);

  return (
    <>
      {cargo.map((count) => (
        <option key={count.id} value={count.id}>
          {count.nome}
        </option>
      ))}
    </>
  );
}
