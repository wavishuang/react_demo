import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

// Material
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

// Material Icons
import NewReleasesIcon from '@material-ui/icons/NewReleases'; // 最新消息
import FavoriteIcon from '@material-ui/icons/Favorite'; // 收藏
import HomeIcon from '@material-ui/icons/Home'; // 首頁
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark'; // 關於我
import ExitToAppIcon from '@material-ui/icons/ExitToApp'; // 登入
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

//import RestoreIcon from '@material-ui/icons/Restore';
//import LocationOnIcon from '@material-ui/icons/LocationOn';

// SCSS
import styles from "./index.scss";

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    borderTop: '1px solid #ddd',
    zIndex: 999
  },
});

const Menu = (props) => {
  const [value] = useState(() => {
    return (props.page !== null) ? props.page : null;
  });

  
  //const [favoriteClass, setFavoriteClass] = useState('inherit');
  //useEffect(() => {
  //  if(props.page === 1) {
  //    setFavoriteClass('secondary');
  //  }
  //}, []);

  const classes = useStyles();

  const history = useHistory();
  const handleLink = (path) => {
    history.push(`/${path}`);
  }

  return (
    <BottomNavigation
      value={value}
      showLabels
      className={styles.bottomNav}
    >
      <BottomNavigationAction label="首頁" icon={<HomeIcon />} onClick={() => handleLink('home')} />
      <BottomNavigationAction label="最新消息" icon={<NewReleasesIcon />} onClick={() => handleLink('news')} />
      <BottomNavigationAction label="收藏" icon={<FavoriteIcon />} onClick={() => handleLink('favorite')} />
      <BottomNavigationAction label="關於我" icon={<CollectionsBookmarkIcon />} onClick={() => handleLink('about')} />
      <BottomNavigationAction label="登入" icon={<ExitToAppIcon />} onClick={() => handleLink('login')} />
      {/*<BottomNavigationAction label="登入" icon={<AddShoppingCartIcon />} onClick={() => handleLink('cart')} />*/}
    </BottomNavigation>
  )
}

export default Menu;