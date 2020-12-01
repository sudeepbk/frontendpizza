import { Button, Grid, Snackbar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { fade, makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import MoreIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/Notifications";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import BillingPage from "./component/Main/Billing_page";
import LandingPage from "./component/Main/Landing_Page";
import OrderPage from "./component/Main/Order_Page";
import PageNotFound from "./component/Main/Page_Not_Found";
import SpecificIteam from "./component/Main/SpecificIteam";
import RightDrawer from "./component/Sub_Component/Drawer";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  if (localStorage.getItem("OrderedList") == null) {
    localStorage.setItem("OrderedList", null);
  }
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleDrawerOpen() {
    setOpenDrawer(true);
  }

  function handleDrawerClose() {
    setOpenDrawer(false);
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  function countIteamOrdered() {
    var count = 0;

    if (JSON.parse(localStorage.getItem("OrderedList")) !== null) {
      var a = JSON.parse(localStorage.getItem("OrderedList"));
      console.log(typeof a.length);
      count = a.length;
    }

    return count;
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* Menu*/}
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <MailIcon />
        </IconButton>
        <p>Menu</p>
      </MenuItem>

      {/* Notification */}
      <MenuItem>
        <IconButton
          aria-label="show 11 new notifications"
          color="inherit"
          onClick={() => {
            setOpenDrawer(false);
          }}
        >
          <NotificationsIcon />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      {/* Profile*/}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <div className={classes.grow}>
        <RightDrawer
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
          Drawer={openDrawer}
        />
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Mikes Pizza and Sub
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button href="/">Menu</Button>
              <Button>About us</Button>

              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                disabled={false}
                onClick={() => {
                  setOpenDrawer(true);
                }}
              >
                <Badge badgeContent={countIteamOrdered()} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>

      <Router>
        <Switch>
          <Route
            exact
            path="/Order"
            render={(props) => <OrderPage {...props} />}
          />

          <Route
            exact
            path="/Billing/:menuID"
            render={(props) => <BillingPage {...props} />}
          />

          <Route
            exact
            path="/specificIteam/:IteamName"
            render={(props) => <SpecificIteam {...props} />}
          />

          <Route
            exact
            path="/"
            render={(props) => <LandingPage {...props} />}
          />

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>

      <Grid
        contianer
        style={{ textAlign: "center", padding: "50px", background: "gray" }}
      >
        <Grid item>
          <Typography variant="h4">Contact Us</Typography>
          <Typography variant="h6">Phone: (410) 967-4095</Typography>
          <Typography variant="h6">Email: ayonghang@gmail.com</Typography>
        </Grid>
      </Grid>
    </>
  );
}
