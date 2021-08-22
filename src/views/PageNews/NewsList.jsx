import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteNews } from "../../actions/actionNews.js";

// @material
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './PageNews.scss';

const NewsList = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // 從 store 取出 news
  const news = useSelector((state) => state.news.news);

  // Event
  const handleLink = (path) => {
    history.push(path);
  }

  const handleDeleteNews = (id) => {
    dispatch(deleteNews(id));
  }

  return (
    <ul className={styles.newsList}>
      {news.map(theNews => 
        <li key={theNews.id}>
          <div className={styles.linkText} onClick={() => handleLink(`/news/newsReader/${theNews.id}`)}><h3>{theNews.title}</h3></div>
          <IconButton color="secondary" aria-label="刪除" onClick={() => handleDeleteNews(theNews.id)}>
            <DeleteIcon />
          </IconButton>
        </li>
      )}
    </ul>
  );
};

export default NewsList;