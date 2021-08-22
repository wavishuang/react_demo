import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Material
import Carousel from 'react-material-ui-carousel';
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const Banner = (props) => {
  const [bannerItems, setBannerItems] = useState([]);
  const banners = useSelector(state => state.banner.data);
  useEffect(() => {
    if(banners && banners.length > 0) {
      setBannerItems(banners);
    }
  }, [banners]);

  return (
    <Carousel
      interval="5000"
      animation="fade"
      autoPlay={props.autoPlay}  
    >
      {bannerItems.map((item) => <Item key={item.banner_id} item={item} />)}
    </Carousel>
  );
}

const Item = (props) => {
  return (
    <Paper style={{border: '0', boxShadow: 'none'}}>
      <div style={{width:'100%', height:'32.3vw', maxWidth: '1280px', margin: '0 auto'}}>
        {props.item.link !== '' 
          ? <a href={props.item.link}><img src={`https://store.cc94178.com/uploads/banner/${props.item.img}`} title={props.item.title} width="100%" height="100%" /></a>
          : <img src={`https://store.cc94178.com/uploads/banner/${props.item.img}`} title={props.item.title} width="100%" height="100%" />
        }
      </div>
    </Paper>
  );
}

export default Banner;