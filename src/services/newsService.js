import axios from "axios";

class NewsService {
  constructor() {
    this.axios = axios.create({
      baseURL: "",
    });
  }

  consultAPI() {
    return this.axios.get("").then(({ data: news }) => news);
  }
}

const newsService = new NewsService();
export default newsService;
