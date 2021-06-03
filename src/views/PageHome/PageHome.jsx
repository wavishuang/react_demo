import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../actions/actionUser.js";


// components
import HelloWorld from "../../components/HelloWorld";
import SayHello from "../../components/SayHello";
import Counter from "../../components/Counter";
import SuperAmazingCounter from "../../components/SuperAmazingCounter";
import Menu from "../../components/Menu";

// SCSS
import publicStyles from "../../scss/styles.scss";
import styles from "./PageHome.scss";

// Material
import CssBaseLine from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

const names = ['jeff', 'joe', 'king'];

const PageHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  
  const [displayCounter, setDisplayCounter] = useState(true);

  const handleChange = (event) => {
    setDisplayCounter(event.target.checked);
  };

  const user = useSelector(state => state.user.user);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHomeProducts();
      console.log('fetch data:', data);
    }

    fetchData();
  }, []);

  const fetchHomeProducts = () => {
    const url = 'https://store.cc94178.com/index.php/Api/get_home_products';
    return fetch(url, {
      crossDomain: true,
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      //body: JSON.stringify({
      //  username: user,
      //  password: pass,
      //})
    })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  }

  return (
    <div className={styles.home}>
      <h2 className={publicStyles.title}>首頁</h2>
      <CssBaseLine />
      <Container>
        <HelloWorld />
        <SuperAmazingCounter />
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>關閉計數器</Grid>
            <Grid item>
              <Switch
                defaultChecked
                onChange={handleChange}
                name="displayCounter"
                color="secondary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>
            <Grid item>打開計數器</Grid>
          </Grid>
        </Typography>

        { displayCounter ? <Counter /> : "" }
        {
          names.map(name => 
            <SayHello name={name} key={name} />
          )
        }
      </Container>
      <Menu page={0} />
    </div> 
  );
};

export default PageHome;