
import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuAppBar from './components/navbar.js';
import SimpleTable from './components/oweTable.js';

import { makeStyles } from '@material-ui/core/styles';
import SignIn from "./components/login.js";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Headline2 from "./components/Headline.js";
import RecurringPurchaseTable from "./components/recurringPurchaseTable.js";
import Paper from "@material-ui/core/Paper";
import { blueGrey } from "@material-ui/core/colors";
import CheckboxesGroup from './components/purchase';
import NewPurchase from './components/purchase3.js'

  
function App() {
  const firstTableFirstCol = "Purchaser"
  const secondTableFirstCol = "Owe to"
  const useStyles = makeStyles(theme => ({
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));
  const classes = useStyles();
  const testHeadline = "sdfjdfsdfs";
  // const bull = <span className={classes.bullet}>•</span>;
  const [isLoggedOut, setIsLoggedOut] = React.useState(true);
  const [testArray, setTestArray] = React.useState([
    false,
    false,
    false,
    false,
    false
  ] );

  return (
    <div>
      {!isLoggedOut ? (
        <SignIn />
      ) : (

        <div className="App">
          <MenuAppBar />

          <Grid container spacing={3}>
            <Grid item xs>
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
            </Grid>
          </Grid>

          <Grid container spacing={1} className="gridbox">
            <Grid item>
              <div className="add_purchase_button_div">
               House
              </div>
            </Grid>
            <Grid item xs />
          </Grid>


          <Grid container spacing={0}>
            <Grid item xs={9}>
              <div className="purchase_owed_card">
                <Card>
                  <CardContent align="left">
                    <div className="purchases_owed_label">
                      <Typography align="left" variant="h5">
                        Purchases Owed to Your Household Members
                      </Typography>{" "}
                    </div>

                    <div className="purchase_owed_table">
                      <SimpleTable firstColName={firstTableFirstCol}/>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={0}>
            <Grid item l xs={9}>
              <div className="purchase_owed_card">
                <Card>
                  <CardContent align="left">
                    <div className="purchases_owed_label">
                      <Typography align="left" variant="h5">
                        Purchases Your Household Owes You
                      </Typography>{" "}
                    </div>

                    <div className="purchase_owed_table">
                      <SimpleTable firstColName={secondTableFirstCol}/>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={9}>
              <div className="purchase_owed_card">
                <Card>
                  <CardContent align="left">
                    <div className="purchases_owed_label">
                      <Typography align="left" variant="h5">
                        Recurring Purchases
                      </Typography>
                    </div>
                    <div className="purchase_owed_table">
                      <RecurringPurchaseTable />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          </Grid>
      
      <div className = "add_purchase_button_div">
        <Button
          className="add_purchase_button"
          variant="contained"
          color="primary"
          onClick = {() =>{return;}}        // TODO ADD IN ROUTING
          >
          Add Purchase
        </Button>
      </div>


      {/* <CheckboxesGroup/> */}
      <NewPurchase/>
      </div>
    
    )}
    </div>
  );
}

export default App;
