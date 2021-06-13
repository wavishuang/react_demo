import React, {Fragment, useState} from "react";
import {Switch, Route} from "react-router-dom";

import Container from "@material-ui/core/Container";

// components
import NewsList from "./NewsList.jsx";
import NewsReader from "./NewsReader.jsx";
import NewsForm from "./NewsForm.jsx";

const PageNews = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default PageNews;