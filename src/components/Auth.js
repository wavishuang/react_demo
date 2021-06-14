import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setLineUserInfo } from "../actions/actionAuth.js";

const Auth = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.lineUserInfo) { // 已登入
      const lineUserInfo = JSON.parse(localStorage.lineUserInfo);
      console.log(lineUserInfo);
      dispatch(setLineUserInfo(lineUserInfo));
    }
  }, []);

  return (
    <div className={props.clazzName}>
      {props.children}
    </div>
  );
}

export default Auth;