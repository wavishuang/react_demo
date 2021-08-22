import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

// actions
import { fetchUser } from "../../actions/actionUser.js";

// components
import HelloWorld from "../../components/HelloWorld";
import SayHello from "../../components/SayHello";
import Counter from "../../components/Counter";
import SuperAmazingCounter from "../../components/SuperAmazingCounter";

// Material
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

const names = ['jeff', 'joe', 'king'];

const PageHome = () => {
  const [displayCounter, setDisplayCounter] = useState(true);

  const handleChange = (event) => {
    setDisplayCounter(event.target.checked);
  };

  const user = useSelector(state => state.auth);

  useEffect(() => {
    const fetchData = async () => {
      //const data = await fetchHomeProducts();
      //console.log('fetch data:', data);
    }

    fetchData();
  }, []);

  /*
  const fetchHomeProducts = () => {
    const url = 'https://store.cc94178.com/index.php/Api/get_home_products';
    return fetch(url, {
      crossDomain: true,
      method: 'POST',
      headers: {'Content-Type':'application/json'},
    })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  }
  */

  return (
    <Container>
      {user.name}
      <img src={user.picture} width="300px" height="300px" />
      {/*
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
      */}

      {/* displayCounter ? <Counter /> : "" */}
    </Container>  
  );
};

export default PageHome;