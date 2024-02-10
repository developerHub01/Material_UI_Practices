import React, { useState } from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const VerticalButtons = () => {
  const [view, setView] = useState("list");
  const handleChange = (_, newValue) => {
    setView((prev) => newValue);
  };
  return (
    <ToggleButtonGroup value={view} onChange={handleChange} exclusive>
      <ToggleButton value="list" aria-label="list">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="module" aria-label="module">
        <ViewModuleIcon />
      </ToggleButton>
      <ToggleButton value="quilt" aria-label="quilt">
        <ViewQuiltIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default VerticalButtons;
