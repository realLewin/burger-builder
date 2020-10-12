import React from "react";
import Auxiliary from "../../hoc/auxiliary";
import classes from "./Layout.module.css";

const Layout = (props) => (
  <Auxiliary>
    <div>Toolbar, sidedrawer, backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Auxiliary>
);

export default Layout;
