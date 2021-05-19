import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    width: 200,
    '& input': {
      padding: 12,
      color: theme.palette.text.main,
      fontSize: 14
    }
  },
}));

export default function DatePicker() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        variant="outlined"
        id="date"
        type="date"
        defaultValue="2002-10-25"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
