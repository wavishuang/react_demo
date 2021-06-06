import React, { useState } from 'react';

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

// components
import Copyright from "../../components/Copyright.js";

import qs from "qs";
import jwt_decode from "jwt-decode";

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
}));

export default function PageLogin() {
  const classes = useStyles();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [keep, setKeep] = useState(false);

  const handleKeep = () => {
    if(keep) setKeep(false);
    else setKeep(true);
  }

  const handleSubmit = () => {
    alert("hello")
    console.log('submit');
  }

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
          <Button variant="contained" color="primary">Line 登入</Button>
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
                忘記密碼a
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                註冊
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        
        <Copyright />
      </Box>
    </Container>
  );
}
