import React from 'react';
import { Link } from "react-router-dom";

import Button from "../UI/Button/Button";

import classes from "./ErrorPage.module.scss";

const errorPage = (props) => {
  return(
    <div className={classes.ErrorPage}>
      {/* <h1>Oh Crap</h1> */}
      {/* <h1>Holy moly gosh darn it</h1> */}
      <h1>It seems you've burned the bun</h1>
      
      {/* <h2>We can't find the ingredients for that page.</h2> */}
      <h2>That page is not in our kitchen.</h2>
      <Button>
        <Link to="/">Back Home</Link>
      </Button>
    </div>
  );
}

export default errorPage;