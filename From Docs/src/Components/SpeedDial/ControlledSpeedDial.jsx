import { FileCopy, Print, Save, Share } from "@mui/icons-material";
import {
  Box,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const actions = [
  { icon: <FileCopy />, name: "Copy" },
  { icon: <Save />, name: "Save" },
  { icon: <Print />, name: "Print" },
  { icon: <Share />, name: "Share" },
];

const ControlledSpeedDial = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const handleToggle = (value) => () => setOpen((prev) => value);
  return (
    <Box>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{
          position: "fixed",
          bottom: theme.spacing(2),
          right: theme.spacing(2),
        }}
        icon={<SpeedDialIcon />}
        onOpen={handleToggle(true)}
        onClose={handleToggle(false)}
        open={open}
      >
        {actions.map(({ icon, name }, key) => (
          <SpeedDialAction
            key={key}
            icon={icon}
            tooltipTitle={name}
            onClick={handleToggle(false)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default ControlledSpeedDial;
