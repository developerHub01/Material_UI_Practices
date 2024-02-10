import React, { useState } from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import LaptopIcon from "@mui/icons-material/Laptop";
import TvIcon from "@mui/icons-material/Tv";
import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";

const EnforceValueSet = () => {
  const [alignment, setAlignment] = useState("left");
  const [devices, setDevices] = useState(["phone"]);
  const handleAlignmentChange = (_, newValue) => {
    if (newValue) setAlignment((prev) => newValue);
  };
  const handleDevicesChange = (_, newValue) => {
    if (newValue.length) setDevices((prev) => newValue);
  };
  return (
    <Stack direction="row" gap={2}>
      <ToggleButtonGroup
        value={alignment}
        onChange={handleAlignmentChange}
        exclusive
      >
        <ToggleButton value="left" aria-label="left">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="center">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right">
          <FormatAlignRightIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup value={devices} onChange={handleDevicesChange}>
        <ToggleButton value="laptop" aria-label="laptop">
          <LaptopIcon />
        </ToggleButton>
        <ToggleButton value="tv" aria-label="tv">
          <TvIcon />
        </ToggleButton>
        <ToggleButton value="phone" aria-label="phone">
          <PhoneAndroidIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default EnforceValueSet;
