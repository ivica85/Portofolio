import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SiderDrawer from "./SideDrawer";

const useStyles = makeStyles(theme => ({
  appbar: {
    background: "#2f2f2f",
    boxShadow: "none",
    padding: "10px 0px"
  },
  appTransparent: {
    background: "transparent"
  }
}));

const Header = () => {
  const clasess = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const hendleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hendleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      className={headerShow ? clasess.appbar : clasess.appTransparent}
      style={{ boxShadow: "none" }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue">Portofolio</div>
          <div className="header_logo_title">Ivica Ivančić </div>
        </div>
        <IconButton color="inherit" aria-label="menu" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <SiderDrawer open={drawerOpen} onClose={toggleDrawer}></SiderDrawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
