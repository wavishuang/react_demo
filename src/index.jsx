/* src/index.js */
import React from "react";
import ReactDom from "react-dom";
import { HashRouter, BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "regenerator-runtime";
import "core-js/stable";
import store from "./store";
import "./scss/styles.scss";

// Views
import PageHome from "./views/PageHome";
import PageNews from "./views/PageNews";
import PageFavorite from "./views/PageFavorite";
import PageAbout from "./views/PageAbout";
import NotFound from "./views/NotFound";

// const PageHome = React.lazy(() => import('./views/PageHome'));

ReactDom.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/home" component={PageHome} />
        <Route path="/news" component={PageNews} />
        <Route path="/favorite" component={PageFavorite} />
        <Route path="/about" component={PageAbout} />
        <Route path="/" component={NotFound} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
);
