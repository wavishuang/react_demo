import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


const NewsReader = () => {
  const history = useHistory();
  const news = useSelector((state) => state.news.news);
  const {id: targetNewsId} = useParams();
  const targetNews = news.find(theNews => String(theNews.id) === String(targetNewsId));
  
  return (
    <div>
      <h3>{targetNews.title}</h3>
      <div>{targetNews.describe}</div>
      <button type="button" onClick={() => history.go(-1)}>返回</button>
    </div>
  );
};

export default NewsReader;