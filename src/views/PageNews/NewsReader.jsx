import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const NewsReader = (props) => {
  const news = useSelector((state) => state.news.news);
  const {id: targetNewsId} = useParams();
  const targetNews = news.find(theNews => String(theNews.id) === String(targetNewsId));
  
  return (
    <div>
      <h3>{targetNews.title}</h3>
      <div>{targetNews.describe}</div>
    </div>
  );
};

export default NewsReader;