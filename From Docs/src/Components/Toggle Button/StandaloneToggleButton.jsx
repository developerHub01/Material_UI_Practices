import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { ToggleButton } from "@mui/material";

const StandaloneToggleButton = () => {
  const [selected, setSelected] = useState(false);
  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => setSelected((prev) => !prev)}
    >
      <CheckIcon />
    </ToggleButton>
  );
};

export default StandaloneToggleButton;
