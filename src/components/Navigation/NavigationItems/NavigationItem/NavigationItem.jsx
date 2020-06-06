import React from 'react';

import { NavLink } from "react-router-dom";

import "./NavigationItem.css";
// import classes from "./NavigationItem.module.scss";

const navigationItem = (props) => {
  return(
    <li className="NavigationItem">
      <NavLink to={props.link} activeClassName="active">{props.children}</NavLink>
    </li>
  )
}

export default navigationItem;