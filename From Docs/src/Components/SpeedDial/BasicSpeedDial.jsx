import { FileCopy, Print, Save, Share } from "@mui/icons-material";
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";

const actions = [
  { icon: <FileCopy />, name: "Copy" },
  { icon: <Save />, name: "Save" },
  { icon: <Print />, name: "Print" },
  { icon: <Share />, name: "Share" },
];

const BasicSpeedDial = () => {
  return (
    <Box
      sx={{
        height: 320,
        flexGrow: 1,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map(({ icon, name }, i) => (
          <SpeedDialAction
            key={name + "=" + (1 + i)}
            icon={icon}
            tooltipTitle={name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default BasicSpeedDial;
