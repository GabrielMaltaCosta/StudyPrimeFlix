import axios from "axios";

//url_base = "https://api.themoviedb.org/3"

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;
