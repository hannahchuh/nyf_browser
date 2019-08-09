import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./purchase.css";
import MenuAppBar from "./navbar.js";
import DatePicker from "react-datepicker";
import "./purchase3.css";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default class NewPurchase extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      itemName: "",
      isRecurring: false,
      recurringVal: -1,
      people: {
        1: { name: "Chris", owesMoney: false, amtOwed: 0 },
        2: { name: "Lisa", owesMoney: false, amtOwed: 0 },
        3: { name: "Grace", owesMoney: false, amtOwed: 0 }
      }
    };
  }

  handler(
    personId,
    newOwesMoney,
    newAmtOwed,
    newItemName,
    newIsRecurring,
    newRecurringVal,
    switchCode
  ) {
    let person = this.state.people[personId];
    let updatedPeople = this.state.people;

    console.log("ENTERED HANDLER");
    switch (switchCode) {
      case "PERSON":
        updatedPeople[personId] = {
          name: person.name,
          owesMoney: person.owesMoney,
          amtOwed: person.amtOwed
        };
        this.setState({
          people: updatedPeople,
          itemName: this.state.itemName,
          isRecurring: this.state.isRecurring,
          recurringVal: this.state.recurringVal
        });
        break;
      case "AMT":
        updatedPeople[personId] = {
          name: person.name,
          owesMoney: person.owesMoney,
          amtOwed: newAmtOwed
        };
        this.setState({
          people: updatedPeople,
          itemName: this.state.itemName,
          isRecurring: this.state.isRecurring,
          recurringVal: this.state.recurringVal
        });
        break;
      case "CYCLE_VAL":
        this.setState({
          people: this.state.people,
          itemName: this.state.itemName,
          isRecurring: this.state.isRecurring,
          recurringVal: newRecurringVal
        });
        break;
      case "IS_RECURRING":
          console.log("IS_RECURRING");
          console.log(newIsRecurring);

            if(newIsRecurring){

                this.setState({
                  people: this.state.people,
                  itemName: this.state.itemName,
                  isRecurring: true,
                  recurringVal: this.state.recurringVal
                });
            }
            else{
                this.setState({
                    people: this.state.people,
                    itemName: this.state.itemName,
                    isRecurring: false,
                    recurringVal: this.state.recurringVal
                  });
            }
        console.log(this.state);
        break;
    }
  }

  render() {
    return <Checkboxes handler={this.handler} people={this.state.people} />;
  }
}

class Checkboxes extends React.Component {
  render() {
    const checkboxes = Object.keys(this.props.people).map(id => {
      let person = this.props.people[id];

      return (
        <div className="checkbox_and_name">
          <Checkbox
            value={person.name}
            onChange={() =>
              this.props.handler(
                id,
                !person.owesMoney,
                person.amtOwed,
                "",
                false,
                -1,
                "PERSON"
              )
            }
          />
          <p className="person_name">{person.name}</p>
          <TextField
            type="number"
            onChange={event => {
              this.props.handler(
                id,
                person.owesMoney,
                parseInt(event.target.value),
                "",
                false,
                -1,
                "AMT"
              );
            }}
          />

          <Select
            onChange={event => {
              this.props.handler(
                id,
                person.owesMoney,
                person.amtOwed,
                "",
                false,
                event.target.value,
                "CYCLE_VAL"
              );
            }}
          >
            <MenuItem value={0}>Daily</MenuItem>
            <MenuItem value={1}>Monthly</MenuItem>
            <MenuItem value={2}>Yearly</MenuItem>
          </Select>
        </div>
      );
    });

    return (
      <div className="root">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <div className="add_purchase_card_wrapper_div">
              <Card>
                <CardContent align="left">
                  <Typography align="left" variant="h4">
                    Add a Purchase for HOUSEHOLD_NAME
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
        <Checkbox
          onChange={(event, checked) =>
            {

                this.props.handler(
                  "",
                  false,
                  -1,
                  "",
                  checked,
                  -1,
                  "IS_RECURRING"
                );
            }
          }
        />
        {checkboxes}
      </div>
    );
  }
}
