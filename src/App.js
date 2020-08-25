import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListNews from "./components/ListNews";
import newsService from './services/newsService';

function App() {
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  async function getData(){
    try {
      const result = await newsService.getNewsFromTopic({category});
     setNews(result.articles);
    } catch (error) {
      console.log('Not connection possible!!!');
    }
  }

  useEffect(() => {
     getData();
  }, [category]);

  return (
    <Fragment>
      <Header title={"News"} />
      <div className="container white">
        <Form 
          setCategory={setCategory} 
        />
        <ListNews
          news = {news}
        />
      </div>
    </Fragment>
  );
}

export default App;
