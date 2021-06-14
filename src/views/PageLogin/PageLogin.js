import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

// material
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

<<<<<<< HEAD
// components
import Copyright from "../../components/Copyright.js";
import LineSquareDefault from "../../images/LineSquareDefault.png";

import {
  getLineCode,
  getApiToken,
  getLineUserInfo 
} from "../../utils/helperLine.js";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  lineBtn: {
    background: '#00b902',
    color: '#fff',
    paddingLeft: '6px',
    marginTop: '3rem'
  },
  lineImg: {
    width: '30px',
    height: '30px'
  }
}));

export default function PageLogin() {
  const classes = useStyles();
  const history = useHistory();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [keep, setKeep] = useState(false);

  const clientState = 'abcdef';

  let urlParams = new URLSearchParams(window.location.search);
  let responseCode = '';
  let responseState = '';

  if(urlParams.has('code') && urlParams.has('state') && urlParams.get('state') === clientState) {
    responseCode = urlParams.get('code');
    responseState = urlParams.get('state');

    getApiToken(responseCode, (res) => {
      if(res.error) {
        alert('token 過期，請重新登入！');
        localStorage.removeItem('lineInfo');
      } else {
        const {id_token} = JSON.parse(localStorage.lineInfo);
        getLineUserInfo(id_token, (res2) => {
          if(res2.error) {
            alert(res2.error_description);
          } else {
            fetchUserLogin(res2);
            // history.push('/');
          }
        });
      }
    });
  }

  if(localStorage.lineUserInfo && !localStorage.lineUserInfo.error && localStorage.lineInfo) { // 已登入
    const lineInfo = JSON.parse(localStorage.lineInfo);

    if(!lineInfo.error && lineInfo.id_token) {
      getLineUserInfo(lineInfo.id_token, (res) => {
        fetchUserLogin(res);
        // history.push('/');
      });  // 取得 使用者資訊
    }
  }

  // ======= Line Login : 導向 Line 頁面，判斷是否登入 =======
  const handleLineLogin = () => {
    getLineCode(clientState);
  }

  // ======= 寫入 DB =======
  const fetchUserLogin = (data) => {
    console.log(data);
    console.log(JSON.stringify(data));

    if(data.name) {
      const url = 'https://store.cc94178.com/index.php/FrontEndApi/set_line_info';
      fetch(url, {
        crossDomain: true,
        method: 'POST',
        headers: {
          'Accept': '*/*',
          'Connection': 'keep-alive',
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true'
        },
        body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((res) => {
        return res;
      });
    }
  }

  // ======= Event =======
  // 記住我
  const handleKeep = () => {
    if(keep) setKeep(false);
    else setKeep(true);
  }

  // 登入
  const handleSubmit = () => {
    console.log('submit');
  }

=======
const PageLogin = () => {
>>>>>>> f628f38c49f0d1491af999b92fe5588ed3deca4e
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          會員登入
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="常用手機"
            name="phone"
            autoComplete="tel"
            autoFocus
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="密碼"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" checked={keep} onChange={handleKeep} />}
            label="記住我"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleSubmit()}
          >
            登入
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                忘記密碼
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                註冊
              </Link>
            </Grid>
          </Grid>

          <Button
            type="button"
            fullWidth
            variant="contained" 
            className={classes.lineBtn}
            onClick={() => handleLineLogin()}>
            <img src={LineSquareDefault} className={classes.lineImg}/>使用 Line 登入
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
