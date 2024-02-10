import React, { useState } from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";

const children = [
  <ToggleButton value="left" key="left">
    <FormatAlignLeftIcon />
  </ToggleButton>,
  <ToggleButton value="center" key="center">
    <FormatAlignCenterIcon />
  </ToggleButton>,
  <ToggleButton value="right" key="right">
    <FormatAlignRightIcon />
  </ToggleButton>,
  <ToggleButton value="justify" key="justify">
    <FormatAlignJustifyIcon />
  </ToggleButton>,
];

const Size = () => {
  const [alignment, setAlignment] = useState("left");
  const handleChange = (_, newValue) => {
    setAlignment((prev) => newValue);
  };
  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };
  return (
    <Stack gap={3} alignItems="center">
      <ToggleButtonGroup {...control} size="small">
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control}>{children}</ToggleButtonGroup>
      <ToggleButtonGroup {...control} size="large">
        {children}
      </ToggleButtonGroup>
    </Stack>
  );
};

export default Size;
