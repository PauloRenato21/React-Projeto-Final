import api from "API/Api";
import baseUrl from "API/Url";

const cargodeleteDb = (id) => {
  api.delete(`${baseUrl}cargo/${id}`);
};

export default cargodeleteDb;
