import React from "react";

// material
import CssBaseLine from "@material-ui/core/CssBaseline";

// components
import Menu from "../../components/Menu";

// SCSS
import publicStyles from "../../scss/styles.scss";
import styles from "./PageFavorite.scss";

const PageFavorite = () => {
  return (
    <div className={styles.favorite}>
      <CssBaseLine />
      <Menu page={2} />
      <h2 className={publicStyles.title}>Favorite</h2>
    </div>
  )
};

export default PageFavorite;