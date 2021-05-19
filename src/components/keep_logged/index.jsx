import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  formControl: {
    '& label span': {
      fontSize: '14px'
    }
  }
}));

export default function Checkboxe() {
  const classes = useStyles();
  const [keepLogged, setKeepLogged] = React.useState({
    logged: false
  });

  const handleChange = (event) => {
    setKeepLogged({ ...keepLogged, [event.target.name]: event.target.checked });
  };

  const { logged } = keepLogged;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={logged}
                onChange={handleChange}
                name="logged"
                />
              }
              label="Keep me logged in"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
