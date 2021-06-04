/* src/index.js */
import React from "react";
import { HashRouter, BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import "./scss/styles.scss";

// Views
import PageHome from "./views/PageHome";
import PageNews from "./views/PageNews";
import PageFavorite from "./views/PageFavorite";
import PageAbout from "./views/PageAbout";
import PageLogin from "./views/PageLogin";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home" component={PageHome} />
        <Route path="/news" component={PageNews} />
        <Route path="/favorite" component={PageFavorite} />
        <Route path="/about" component={PageAbout} />
        <Route path="/login" component={PageLogin} />
        <Route exact path="/" component={PageHome} />
        <Route path="*" component={NotFound} />
      </Switch>
    </HashRouter>
  );
};

export default App;