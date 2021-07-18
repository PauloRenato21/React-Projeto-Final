import api from "API/Api";
import baseUrl from "API/Url";

const responsaveldeleteDb = (id) => {
  api.delete(`${baseUrl}responsavel/${id}`);
};

export default responsaveldeleteDb;
