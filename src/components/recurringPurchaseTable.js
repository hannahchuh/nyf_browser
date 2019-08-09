import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',   
    overflowX: 'auto',
    padding: '0px',
    borderColor: 'black'
  },
  
  table: {
    minWidth: 650,
  },
}));

function createData(purchaser, item, price, cycle) {
  return { purchaser, item, price, cycle };
}

const rows = [
  createData('Sam', "Toilet paper", "$24", "weekly"),
  createData('Joe', "Granola bar", "$37", "weekly"),
  createData('Mike', "Goldfish", "$24", "monthly"),
];

const RecurringPurchaseTable = (props) =>  {
  const classes = useStyles();
  return (
    
    <Paper className={classes.root}>
      <Table className={classes.table} style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px'}}>
        <TableHead>
          <TableRow>
            <TableCell style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '14px', color: '#282c34', fontWeight: 'bold'}}>{props.firstColName}</TableCell>
            <TableCell align="center" borderColor = "black" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '14px', color: '#282c34', fontWeight: 'bold'}}>Item</TableCell>
            <TableCell align="center" borderColor = "black" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '14px', color: '#282c34', fontWeight: 'bold'}}>Price</TableCell>
            <TableCell align="center" borderColor = "black" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '14px', color: '#282c34', fontWeight: 'bold'}}>Recurrence Period</TableCell>
            <TableCell align="center" borderColor = "black" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '14px', color: '#282c34', fontWeight: 'bold'}}>Delete Recurring Purchase</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell align ="left" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '12px'}}>{row.purchaser}</TableCell>
              <TableCell align="center" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '12px'}}>{row.item}</TableCell>
              <TableCell align="center" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '12px'}}>{row.price}</TableCell>
              <TableCell align="center" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '12px'}}>{row.cycle}</TableCell>
              <TableCell align="center" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '12px'}}><Button/></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default RecurringPurchaseTable;