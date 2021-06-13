
import React from "react";

// material
import CssBaseLine from "@material-ui/core/CssBaseline";

// components
import Auth from "../../components/Auth";
import PageFavorite from "./PageFavorite.jsx";
import Menu from "../../components/Menu";

// SCSS
import publicStyles from "../../scss/styles.scss";
import styles from "./PageFavorite.scss";

const Favorite = () => {
  return (
    <Auth clazzName={styles.favorite}>
      <h2 className={publicStyles.title}>收藏</h2>
      <CssBaseLine />
      <PageFavorite />
      <Menu page={2} />
    </Auth>
  );
}

export default Favorite;