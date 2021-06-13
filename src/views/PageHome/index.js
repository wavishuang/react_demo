import React from "react";
import Auth from "../../components/Auth";
import PageHome from "./PageHome.jsx";
import Menu from "../../components/Menu";

import CssBaseLine from "@material-ui/core/CssBaseline";
import publicStyles from "../../scss/styles.scss";
import styles from "./PageHome.scss";

const Home = () => {
  return (
    <Auth clazzName={styles.home}>
      <h2 className={publicStyles.title}>首頁</h2>
      <CssBaseLine />
      <PageHome />
      <Menu page={0} />
    </Auth>
  );
}

export default Home;
