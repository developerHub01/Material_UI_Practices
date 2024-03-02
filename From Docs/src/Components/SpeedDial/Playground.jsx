import { FileCopy, Print, Save, Share, Speed } from "@mui/icons-material";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Switch,
  styled,
} from "@mui/material";
import React, { useState } from "react";

const actions = [
  { icon: <FileCopy />, name: "Copy" },
  { icon: <Save />, name: "Save" },
  { icon: <Print />, name: "Print" },
  { icon: <Share />, name: "Share" },
];

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionLeft, &.MuiSpeedDial-directionUp": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const Playground = () => {
  const [direction, setDirection] = useState("up");
  const [hidden, setHidden] = useState(false);
  const handleDirectionChange = (e) => setDirection((prev) => e.target.value);
  const handleHiddenChange = (e) => setHidden((prev) => e.target.checked);
  return (
    <Box sx={{ p: 3, flexGrow: 1 }}>
      <FormControlLabel
        control={
          <Switch
            checked={hidden}
            onChange={handleHiddenChange}
            color="primary"
          />
        }
        label="Hidden"
      />
      <FormControl component="fieldset" sx={{ mt: 1, display: "flex" }}>
        <FormLabel component={"legend"}>Direction</FormLabel>
        <RadioGroup
          aria-label="direction"
          name="direction"
          value={direction}
          onChange={handleDirectionChange}
          row
        >
          <FormControlLabel value={"up"} control={<Radio />} label="Up" />
          <FormControlLabel value={"right"} control={<Radio />} label="Right" />
          <FormControlLabel value={"down"} control={<Radio />} label="Down" />
          <FormControlLabel value={"left"} control={<Radio />} label="Left" />
        </RadioGroup>
      </FormControl>

      <Box
        sx={{
          position: "relative",
          mt: 3,
          height: 450,
          bgcolor: "gray",
          borderRadius: 4,
        }}
      >
        <StyledSpeedDial
          ariaLabel="SpeedDial playground exam"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
        >
          {actions.map(({ name, icon }, i) => (
            <SpeedDialAction key={name} icon={icon} tooltipTitle={name} />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
};

export default Playground;
