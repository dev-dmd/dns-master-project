import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <img className={classes.invertIcon} src="http://localhost:3000/icons/inbox.svg" alt="inbox" />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <img className={classes.invertIcon} src="http://localhost:3000/icons/paperPlane.svg" alt="sent" />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <img src="http://localhost:3000/icons/plus-icon.svg" alt="new message" />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <img src="http://localhost:3000/icons/star.svg" alt="favorites" />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <img src="http://localhost:3000/icons/user.svg" alt="user" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}