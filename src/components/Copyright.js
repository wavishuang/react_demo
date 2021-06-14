import React from "react";
import { Link } from "react-router-dom";

// material
import Typography from "@material-ui/core/Typography";

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/" style={{color: '#00a152'}}>
        加一購物網
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
  </Typography>
);

export default Copyright;