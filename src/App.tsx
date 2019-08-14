import React , {Component} from "react";
import "./App.css";
import MenuAppBar from "./components/navbar.js";
import SimpleTable from "./components/oweTable.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import RecurringPurchaseTable from "./components/recurringPurchaseTable.js";
import NewPurchase from "./components/purchase3.js";

const cycleStrings = ["daily", "weekly", "monthly", "yearly", "annually"]

interface Household{
  id: string,
  name: string,
  users: Person[],
  currentTransactions: Transaction[],
  transactions: Transaction[],
  billingStart: Date,
  billingCycle: number,
  recurringTransactions: Transaction[]
}

interface Person{
  firstName: string,
  lastName: string,
  id: string,
  transactions: Transaction[]
}

interface Transaction{
  householdId: string,
  comment: string,
  date: Date,
  price: number,
  purchaser: Person,
  debtors: Person[]
}

const App: React.FC = React.memo(() => {
  // preprocessing stuff
  return (
    <div className="App">
      <MenuAppBar />

      <Grid container spacing={3}>
        <Grid item xs>
          <div className="household_card_wrapper_div">
            <Card className="household_card">
              <CardContent>
                <Typography
                  className="household_title"
                  align="left"
                  variant="h4"
                >
                  Household: Not Your Family Team
                </Typography>
                <hr />
                <p>Billing Cycle: {cycleStrings[this.state.data.billingCycle]}</p>
                <p>The Current Billing Cycle Began: {this.state.data.billingStart}</p>
                <p>Household Members: {this.state.curPeople.join(", ")}</p>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={0}>
        <Grid item xs={9}>
          <div className="purchase_owed_card">
            <Card>
              <CardContent >
                <div className="purchases_owed_label">
                  <Typography align="left" variant="h5">
                    Household Transactions
                  </Typography>{" "}
                </div>

                <div className="purchase_owed_table">
                  <SimpleTable transactionIds = {this.state.data.transactions}/>
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
              <CardContent>
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

      <NewPurchase transactionIds =  {this.state.data.transactions} />
    </div>
 
);
});

