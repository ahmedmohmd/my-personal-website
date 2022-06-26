import axios from "axios";
import config from "../config/config.json";

const getArticles = () => {
  return axios.get("https://dev.to/api/articles?username=ahmedmohmd&state=all");
};

export default getArticles;
