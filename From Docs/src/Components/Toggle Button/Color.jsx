import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";

const Color = () => {
  const [alignment, setAlignment] = useState("web");
  const handleChange = (_, newValue) => {
    setAlignment((prev) => newValue);
  };
  return (
    <ToggleButtonGroup
      color="secondary"
      value={alignment}
      onChange={handleChange}
      exclusive
    >
      <ToggleButton value="web">WEB</ToggleButton>
      <ToggleButton value="android">ANDROID</ToggleButton>
      <ToggleButton value="ios">IOS</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Color;
