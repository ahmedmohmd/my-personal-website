import axios from "axios";
import config from "../config/config.json";

const getArticles = () => {
  return axios.get(config.devDotToArticlesApiEndPoint);
};

export default getArticles;
