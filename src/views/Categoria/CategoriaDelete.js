import api from "API/Api";
import baseUrl from "API/Url";

const categoriadeleteDb = (id) => {
  api.delete(`${baseUrl}categoria/${id}`);
};

export default categoriadeleteDb;
