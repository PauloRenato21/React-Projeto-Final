import api from "API/Api";
import baseUrl from "API/Url";

const atletadeleteDb = (id) => {
  api.delete(`${baseUrl}atleta/${id}`);
};

export default atletadeleteDb;
