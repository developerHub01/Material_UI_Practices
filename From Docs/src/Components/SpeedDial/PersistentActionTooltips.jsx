import { FileCopy, Print, Save, Share } from "@mui/icons-material";
import {
  Backdrop,
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

const PersistentActionTooltips = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleToggle = (value) => () => setOpen((prev) => value);
  return (
    <Box>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{
          position: "fixed",
          bottom: theme.spacing(2),
          right: theme.spacing(2),
        }}
        open={open}
        onOpen={handleToggle(true)}
        onClose={handleToggle(false)}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleToggle(false)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default PersistentActionTooltips;
