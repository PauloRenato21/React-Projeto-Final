import api from "API/Api";
import baseUrl from "API/Url";

const funcionariodeleteDb = (id) => {
  api.delete(`${baseUrl}funcionario/${id}`);
};

export default funcionariodeleteDb;
