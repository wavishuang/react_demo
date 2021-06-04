import React from "react";

// material
import CssBaseLine from "@material-ui/core/CssBaseline";

// components
import Menu from "../../components/Menu";

// SCSS
import publicStyles from "../../scss/styles.scss";
import styles from "./PageAbout.scss";

const PageAbout = () => {
  return (
    <div className={styles.about}>
      <CssBaseLine />
      
      <h2 className={publicStyles.title}>About</h2>

      <Menu page={3} />
    </div>
  )
}

export default PageAbout;