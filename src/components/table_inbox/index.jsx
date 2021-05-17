import React from 'react';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SelectCheckBox from '../select_checkbox';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  root: {
    border: 'none'
  },
  body: {
    fontSize: 13,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 320,
  },
});

function createData(avatar, sender, message, timestamp) {
  return { avatar, sender, message, timestamp };
}

const rows = [
  createData('http://localhost:3000/images/current_user.png', 'Jane Doe', 'Domain reneval Notice -  Hi Annie,this is to inform you that you should renew your domain nam...', '12:15 AM'),
  createData('http://localhost:3000/images/Merit.png', 'Merit Onye', 'Domain reneval Notice -  Hi Annie,this is to inform you that you should renew your domain nam...', '3:04 PM'),
  createData('http://localhost:3000/images/Google.png', 'Google', 'Domain reneval Notice -  Hi Annie,this is to inform you that you should renew your domain nam...', '4:04 PM'),
  createData('http://localhost:3000/images/Merit.png', 'Merit Ani', 'Domain reneval Notice -  Hi Annie,this is to inform you that you should renew your domain nam...', 'Apr 28'),
  createData('http://localhost:3000/images/Kelvin.png', 'Kelvin Pat', 'Domain reneval Notice -  Hi Annie,this is to inform you that you should renew your domain nam...', 'Apr 12'),
  createData('http://localhost:3000/images/Gbenga.png', 'Gbenga Dan', 'Domain reneval Notice -  Hi Annie,this is to inform you that you should renew your domain nam...', 'Mar 30'),
  createData('http://localhost:3000/images/Merit.png', 'Merit Ani', 'Domain reneval Notice -  Hi Annie,this is to inform you that you should renew your domain nam...', 'Apr 28'),
  createData('http://localhost:3000/images/Kelvin.png', 'Kelvin Pat', 'Domain reneval Notice -  Hi Annie,this is to inform you that you should renew your domain nam...', 'Apr 12'),
  createData('http://localhost:3000/images/Gbenga.png', 'Gbenga Dan', 'Domain reneval Notice -  Hi Annie,this is to inform you that you should renew your domain nam...', 'Mar 30'),
];

export default function InboxList() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
      <TableContainer elevation={0} component={Paper}>
        <Table stickyHeader aria-label="sticky table" className={classes.table} aria-label="simple table">
        {
          matches ? (
            <TableHead>
              <TableRow>
                  <StyledTableCell>
                    <SelectCheckBox />
                  </StyledTableCell>
              </TableRow>
            </TableHead>
          ) : null
        },
        {
          matches ? (
            <TableBody>
            {rows.map((row) => (
              <TableRow hover key={row.name}>
                <StyledTableCell><img src={row.avatar} alt={row.name} /></StyledTableCell>
                <StyledTableCell>{row.sender}</StyledTableCell>
                <StyledTableCell>{row.message}</StyledTableCell>
                <StyledTableCell align="right">{row.timestamp}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
          ) : (
            <TableBody>
            {rows.map((row) => (
              <TableRow hover key={row.name}>
                <StyledTableCell>
                  <img style={{width: '45px'}} src={row.avatar} alt={row.name} />
                </StyledTableCell>
                <StyledTableCell>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <strong>{row.sender}</strong>
                    </Grid>
                    <Grid style={{fontSize: '10px', color: '#A5A1A1', display: 'flex', justifyContent: 'flex-end'}} item xs={6}>
                      {row.timestamp}
                    </Grid>
                    <Grid style={{fontSize: '11px', color: '#A5A1A1', height: '20px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', width: '200px'}} item xs={12}>
                      {row.message}
                    </Grid>
                  </Grid>  
                </StyledTableCell>
              </TableRow>
            ))}
            </TableBody>
          )
        }          
        </Table>
      </TableContainer>
  );
}