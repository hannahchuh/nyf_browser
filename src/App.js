import React from "react";
import "./App.css";
import MenuAppBar from "./components/navbar.js";
import SignIn from "./components/login.js";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function App() {
  const useStyles = makeStyles({
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    }
  });
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  return (
    <>
      {isLoggedIn ? (
        <SignIn />
      ) : (
        <div className="App">
          <MenuAppBar />

          <SimpleTable />
          <div className="household_card_wrapper_div">
            <Card className="household_card">
              <CardContent align="left">
                <Typography
                  className="household_title"
                  align="left"
                  variant="h4"
                >
                  Household Name
                </Typography>
                <hr />
                <p>Billing Cycle: TEST_NUMBER</p>
                <p>The Current Billing Cycle Ends: TEST_DATE</p>
                <p>Household Members: TEST_NAMES</p>
              </CardContent>
            </Card>
          </div>

          <div className="add_purchase_button_div">
            <Button
              className="add_purchase_button"
              variant="contained"
              color="primary"
              onClick={() => {
                return;
              }} // TODO ADD IN ROUTING
            >
              Add Purchase
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
