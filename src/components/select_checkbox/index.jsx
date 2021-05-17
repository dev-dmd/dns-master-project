import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 5,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid',
    fontSize: 12,
    padding: '5px 5px 5px 5px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: "Poppins', sans-serif",
    '&:focus': {
      borderRadius: 5,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(3),
  },
  checkBox: {
    '& div div ': {
      borderColor: theme.palette.secondary.main,
      borderRadius: 5
    }
  }
}));

export default function SelectCheckBox() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl className={classes.margin + " " + classes.checkBox}>
      <Select
      variant="outlined"
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={age}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value={10}>All</MenuItem>
        <MenuItem value={20}>Read</MenuItem>
        <MenuItem value={30}>Unread</MenuItem>
        <MenuItem value={40}>Favorites</MenuItem>
        <MenuItem value={50}>Not a favorite</MenuItem>
      </Select>
    </FormControl>
  );
}