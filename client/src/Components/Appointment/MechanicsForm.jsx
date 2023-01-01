import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const MechanicsForm = (props) => {
  const mechanicsDisabled = props.disable;
  const [mechanic, setMechanic] = useState(props.mechanic);
  let availableSlot1 = false;
  let availableSlot2 = false;
  let availableSlot3 = false;
  let availableSlot4 = false;

  const handleChangeTime = (newValue) => {
    setMechanic(newValue.target.value);
    // props.mechanic(newValue.target.value);
    props.onChange(newValue.target.value);
  };

  return (
    <div>
      <FormControl
        // style={{ display: `${mechanicsDisabled}` }}
        disabled={mechanicsDisabled}
        required
        sx={{ m: 1, minWidth: 120 }}
      >
        <InputLabel id="demo-simple-select-required-label">
          Professionals
        </InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={mechanic}
          label="Professional *"
          onChange={handleChangeTime}
        >
          <MenuItem value={0}>
            <em>None</em>
          </MenuItem>
          <MenuItem disabled={availableSlot1} value={1}>
            Michael
          </MenuItem>
          <MenuItem disabled={availableSlot2} value={2}>
            Jordan
          </MenuItem>
          <MenuItem disabled={availableSlot3} value={3}>
            Tim
          </MenuItem>
          <MenuItem disabled={availableSlot4} value={4}>
            Wilson
          </MenuItem>
        </Select>
        <FormHelperText>Select one of our Professionals</FormHelperText>
      </FormControl>
    </div>
  );
};

export default MechanicsForm;
