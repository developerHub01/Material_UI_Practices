import React from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const ExclusiveSelection = () => {
  const [alignment, setAlignment] = React.useState("left");
  const handleAlignment = (_, newValue) => {
    setAlignment(newValue);
  };
  return (
    <ToggleButtonGroup value={alignment} onChange={handleAlignment} exclusive>
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="center aligned">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justify aligned">
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ExclusiveSelection;
