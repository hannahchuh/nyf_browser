import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function createData(purchaser, item, price, date) {
  return { purchaser, item, price, date };
}

const rows = [
  createData('Sam', "Toilet paper", "$24", "08-05-19"),
  createData('Joe', "Granola bar", "$37", "08-07-19"),
  createData('Mike', "Goldfish", "$24", "08-08-19"),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    
    <Paper className={classes.root}>
      <Table className={classes.table} style={{ padding: "0", margin: "0", borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px'}}>
        <TableHead>
          <TableRow>
            {/*<TableCell>Money Owed</TableCell>*/}
            
            {/*<TableCell align="right">Purchaser</TableCell>*/}
            <TableCell style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '14px', color: '#282c34', fontWeight: 'bold'}}></TableCell>
            <TableCell align="center" borderColor = "black" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '14px', color: '#282c34', fontWeight: 'bold'}}>Item&nbsp;(g)</TableCell>
            <TableCell align="center" borderColor = "black" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '14px', color: '#282c34', fontWeight: 'bold'}}>Price ($)&nbsp;(g)</TableCell>
            <TableCell align="center" borderColor = "black" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '14px', color: '#282c34', fontWeight: 'bold'}}>Date of purchase&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align ="left" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '12px'}}>{row.purchaser}</TableCell>
              <TableCell align="center" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '12px'}}>{row.item}</TableCell>
              <TableCell align="center" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '12px'}}>{row.price}</TableCell>
              <TableCell align="center" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '12px'}}>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}