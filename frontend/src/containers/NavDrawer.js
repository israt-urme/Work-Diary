//import NavStyles from "./NavStyles"

import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
//icons
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
//list icons
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CodeIcon from "@material-ui/icons/Code";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import AlbumIcon from "@material-ui/icons/Album";


const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    //can edit the header bar color
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

function NavDrawer(props) {
    const classes = useStyles();
    // const classes = <NavStyles/>
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    //const preventDefault = (event) => event.preventDefault();
  
    return (
      <div className="reg-container">
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <Link to="/">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                  style={{ color: "white" }}
                >
                  <MenuIcon />
                </IconButton>
              </Link>
              <Typography variant="h7" noWrap>
                Registration Form
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              <Link
                href="https://scrimba.com/playlist/p7P5Hd"
                onclick="event.preventDefault()"
                className={classes.link}
              >
                <ListItem button>
                  <ListItemIcon>
                    <FilterVintageIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Learn React"} />
                </ListItem>
              </Link>
              <Link
                href="https://www.w3schools.com/sass/default.php"
                onclick="event.preventDefault()"
                className={classes.link}
              >
                <ListItem button>
                  <ListItemIcon>
                    <AlbumIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Learn Sass"} />
                </ListItem>
              </Link>
              <Link
                href="https://www.w3schools.com/html/default.asp"
                onclick="event.preventDefault()"
                className={classes.link}
              >
                <ListItem button>
                  <ListItemIcon>
                    <CodeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Learn HTML"} />
                </ListItem>
              </Link>
              <Link
                href="https://www.w3schools.com/css/default.asp"
                onclick="event.preventDefault()"
                className={classes.link}
              >
                <ListItem button>
                  <ListItemIcon>
                    <ArtTrackIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Learn CSS"} />
                </ListItem>
              </Link>
            </List>
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            {/* include containers */}
            {props.children}
          </main>
        </div>
      </div>
    );
  }
export default NavDrawer