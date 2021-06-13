import React from "react";

// material
import CssBaseLine from "@material-ui/core/CssBaseline";

// components
import Auth from "../../components/Auth";
import PageAbout from "./PageAbout.jsx";
import Menu from "../../components/Menu";

// SCSS
import publicStyles from "../../scss/styles.scss";
import styles from "./PageAbout.scss";

const About = () => {
  return (
    <Auth clazzName={styles.about}>
      <h2 className={publicStyles.title}>關於我</h2>
      <CssBaseLine />
      <PageAbout />
      <Menu page={3} />
    </Auth>
  );
}

export default About;