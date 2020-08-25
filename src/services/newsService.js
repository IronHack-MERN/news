import axios from "axios";

class NewsService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
    });
  }

   async getNewsFromTopic(topic) {
    const apiTOKEN = process.env.REACT_APP_BACKEND_API_TOKEN;
    // `/topics/${topic}?token=${apiTOKEN}`
    return this.axios.get()
    .then(({ data: news }) => news);
  }
}

const newsService = new NewsService();

export default newsService;
