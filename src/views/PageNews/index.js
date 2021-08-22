import React from "react";
import Auth from "../../components/Auth";
import PageNews from "./PageNews.jsx";
import Menu from "../../components/Menu";

import CssBaseLine from "@material-ui/core/CssBaseline";
import publicStyles from "../../scss/styles.scss";
import styles from "./PageNews.scss";

const News = () => {
  return (
    <Auth clazzName={styles.home}>
      <CssBaseLine />  
      <h2 className={publicStyles.title}>最新消息</h2>
      <PageNews />
      <Menu page={1} />
    </Auth>
  );
}

export default News;