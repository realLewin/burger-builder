import React, { Component } from "react";
import Auxiliary from "../Auxiliary/auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Auxiliary>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
        <SideDrawer
          open={this.state.showSideDrawer}
          clicked={this.sideDrawerClosedHandler}
        ></SideDrawer>
        <main className={classes.Content}>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;