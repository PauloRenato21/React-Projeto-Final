import api from "API/Api";
import baseUrl from "API/Url";

const turmadeleteDb = (id) => {
  api.delete(`${baseUrl}turma/${id}`);
};

export default turmadeleteDb;
