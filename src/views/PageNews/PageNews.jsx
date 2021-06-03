import React, {Fragment, useState} from "react";
import {Switch, Route} from "react-router-dom";

// material
import CssBaseLine from "@material-ui/core/CssBaseline";

// components
import Menu from "../../components/Menu";
import NewsList from "./NewsList.jsx";
import NewsReader from "./NewsReader.jsx";
import NewsForm from "./NewsForm.jsx";

// SCSS
import publicStyles from "../../scss/styles.scss";
import styles from "./PageNews.scss";

const PageNews = () => {
  return (
    <div className={styles.news}>
      <CssBaseLine />
      <Menu page={1} />
      <h2 className={publicStyles.title}>最新消息</h2>
      <NewsForm />
      <Switch>
        <Route
          exact
          path="/news"
          component={() => (
            <Fragment>
              <NewsList />
            </Fragment>
          )}
        />
        <Route 
          path="/news/newsReader/:id" 
          component={() => <NewsReader />} 
        />
      </Switch>
    </div>
  );
};

export default PageNews;