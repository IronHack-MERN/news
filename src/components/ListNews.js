import React from "react";
import New from "./New";
import PropTypes from 'prop-types'

const ListNews = ({ news }) => (
  <div className="row">
    {news.map((oneNew) => (
      <New 
        key={oneNew.url} 
        oneNew={oneNew} 
      />
    ))}
  </div>
);

ListNews.propTypes = {
  news: PropTypes.array.isRequired
}

export default ListNews;
