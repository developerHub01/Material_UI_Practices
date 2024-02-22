import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";

const IndeterminateCheckBox = () => {
  const [checked, setChecked] = useState([true, false]);
  return (
    <Box>
      <FormControl error>
        <FormLabel>
          Form Label Show Red when error={`true`} in FormControl
        </FormLabel>
        <FormControlLabel
          label="Parent"
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={(e) =>
                setChecked((prev) => [e.target.checked, e.target.checked])
              }
            />
          }
        />
        <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
          <FormControlLabel
            label="First Check"
            control={
              <Checkbox
                checked={checked[0]}
                onChange={() => setChecked([!checked[0], checked[1]])}
              />
            }
          />
          <FormControlLabel
            label="Second Check"
            control={
              <Checkbox
                checked={checked[1]}
                onChange={() => setChecked([checked[0], !checked[1]])}
              />
            }
          />
        </Box>
      </FormControl>
    </Box>
  );
};

export default IndeterminateCheckBox;
