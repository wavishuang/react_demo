import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Material
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

// Material Icons
import NewReleasesIcon from '@material-ui/icons/NewReleases'; // 最新消息
import FavoriteIcon from '@material-ui/icons/Favorite'; // 收藏
import HomeIcon from '@material-ui/icons/Home'; // 首頁
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark'; // 關於我
import ExitToAppIcon from '@material-ui/icons/ExitToApp'; // 登入
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import LocalShippingIcon from '@material-ui/icons/LocalShipping'; // 運送資訊
import NotificationsIcon from '@material-ui/icons/Notifications'; // 通知
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'; // 通知
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; // 購物車
import StorefrontIcon from '@material-ui/icons/Storefront';  // 商店
import FaceIcon from '@material-ui/icons/Face'; // 使用者資訊
import ListIcon from '@material-ui/icons/List'; // 訂單資訊
import InfoIcon from '@material-ui/icons/Info'; // 商品資訊
//import RestoreIcon from '@material-ui/icons/Restore';
//import LocationOnIcon from '@material-ui/icons/LocationOn';

import LogoutIcon from "../../images/logout.png";

import {
  getLineCode,
  getApiToken,
  getLineUserInfo 
} from "../../utils/helperLine.js";

import { clearLineUser } from "../../actions/actionAuth";

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
  button: {
    fontSize: '12px',
    color: 'rgba(0,0,0,.54)',
    background: '#fff',
    border: 0,
    boxShadow: 'none',
    outLine: 'none'
  },
  buttonInner: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonImg: {
    width: '24px',
    height: '24px',
    color: 'rgba(0,0,0,.54)'
  }
});

const Menu = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const classes = useStyles();
  useEffect(() => {
    if(auth.sub && auth.name) {
      setIsLogined(true);
    }
  }, [auth]);

  const [isLogined, setIsLogined] = useState(false);
  const [value] = useState(() => {
    return (props.page !== null) ? props.page : null;
  });



  //const [favoriteClass, setFavoriteClass] = useState('inherit');
  //useEffect(() => {
  //  if(props.page === 1) {
  //    setFavoriteClass('secondary');
  //  }
  //}, []);

  const history = useHistory();
  const handleLink = (path) => {
    history.push(`/${path}`);
  }

  const handleLogout = () => {
    dispatch(clearLineUser);
    localStorage.removeItem('lineInfo');
    localStorage.removeItem('lineUserInfo');
    history.go(0);
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
      {isLogined 
        ? <Button 
            variant="contained"
            className={classes.button} onClick={() => handleLogout('cart')}>
            <div className={classes.buttonInner}><img src={LogoutIcon} className={classes.buttonImg} />登出</div>
          </Button> 
        :<BottomNavigationAction label="登入" icon={<ExitToAppIcon />} onClick={() => handleLink('login')} />
      }
    </BottomNavigation>
  )
}

export default Menu;