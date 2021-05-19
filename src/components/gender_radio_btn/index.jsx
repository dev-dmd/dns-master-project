import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import { FormControlLabel } from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";

const PurpleRadio = withStyles({
  root: {
    color: purple[900],
    '& ~ span': {
      color: '#A5A1A1',
      fontSize: 12
    },
    "&$checked": {
      color: purple[700],
    }
  },
  checked: {}
})((props) => <Radio color="default" {...props} />);

export default function RadioButtons() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <RadioGroup row value={value}>
        <FormControlLabel
          onChange={handleChange}
          value="Female"
          control={<PurpleRadio color="primary" />}
          label="Female"
        />
        <FormControlLabel
          onChange={handleChange}
          value="Male"
          control={<PurpleRadio color="primary" />}
          label="Male"
        />
      </RadioGroup>
    </div>
  );
}