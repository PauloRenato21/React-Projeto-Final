import axios from "axios";
import token from "./Token";

const api = axios.create({
  baseURL: "https://api.com",
  headers: { authorization: token, "Content-Type": "application/json" },
});

export default api;
