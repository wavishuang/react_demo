import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setLineUserInfo } from "../actions/actionAuth.js";

// @material
import CssBaseLine from "@material-ui/core/CssBaseline";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Auth = (props) => {
  console.log("auth:", props, props.toast);
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.lineUserInfo) { // 已登入
      const lineUserInfo = JSON.parse(localStorage.lineUserInfo);
      //console.log(lineUserInfo);
      dispatch(setLineUserInfo(lineUserInfo));
    }
  }, []);

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  /*const handleClick = () => {
    setOpen(true);
  };
  */
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const default_toast = {
    open: false,
    type: 'info',
    message: '',
    duration: 3000
  };

  const [toast, setToast] = useState(default_toast);

  useEffect(() => {
    setToast({...toast, ...props.toast});
    setTimeout(() => {
      setToast(default_toast);
    }, props.toast.duration ? props.toast.duration : default_toast.duration);
  }, [props.toast.open]);

  //const [open, setOpen] = React.useState(true);
  // Toast color: error, warning, success, info
  return (
    <div className={`${props.clazzName}`}>
      <CssBaseLine />
      <Backdrop className={classes.backdrop} open={props.loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {props.children}

      <Snackbar open={toast.open} onClose={handleClose}>
        <Alert onClose={handleClose} severity={toast.type}>
          {toast.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Auth;