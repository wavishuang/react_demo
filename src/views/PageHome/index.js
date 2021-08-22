import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductList } from "../../actions/actionProduct.js";
import { getBanner } from '../../actions/actionBanner';

// components
import Auth from "../../components/Auth";
import PageHome from "./PageHome.jsx";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";

// SCSS
import publicStyles from "../../scss/styles.scss";
import styles from "./PageHome.scss";

const Home = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true); // loading
  const isLoadBanner = useSelector(state => state.banner.isLoad);
  const [toast, setToast] = useState({});

  // ComponentDidMount
  useEffect(() => {
    // Banner
    console.log("banner toast:", toast);
    dispatch(getBanner((res) => {
      console.log("getBanner:", res);
      if(res.code && res.code === '0000') {
        console.log('getBanner');
        setToast({...toast,
          open: true,
          type: 'success',
          message: '成功了！！',
        });
      }
    }));
    // Products
    dispatch( getProductList() );
  }, []);
  
  // 
  useEffect(() => {
    if(isLoadBanner) {
      setOpen(false);
    }
  }, [isLoadBanner]);

  return (
    <Auth clazzName={styles.home} loading={open} toast={toast}>
      <h2 className={`${publicStyles.title} ${styles.title}`}>首頁</h2>
      <Banner
        autoPlay={true}
      />
      <PageHome />
      <Menu page={0} />
    </Auth>
  );
}

export default Home;
