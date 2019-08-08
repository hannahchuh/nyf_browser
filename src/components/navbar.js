import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function MenuAppBar() {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button
            className = "home_button"
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Home
          </Button>
          <Button
            className = "add_purchase_button"
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Add Purchase
          </Button>
          <Button
          style = {{align: "right"}}
            align = "right"
            className = "logout_button"
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
