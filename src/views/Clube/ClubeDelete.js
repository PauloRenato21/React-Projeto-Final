import api from "API/Api";
import baseUrl from "API/Url";

const clubedeleteDb = (id) => {
  api.delete(`${baseUrl}clube/${id}`);
};

export default clubedeleteDb;
