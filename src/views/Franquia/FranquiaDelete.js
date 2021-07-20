import api from "API/Api";
import baseUrl from "API/Url";

const franquiadeleteDb = (id) => {
  api.delete(`${baseUrl}franquia/${id}`);
};

export default franquiadeleteDb;
