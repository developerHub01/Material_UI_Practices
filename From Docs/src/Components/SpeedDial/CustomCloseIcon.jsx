import { Edit, FileCopy, Print, Save, Share } from "@mui/icons-material";
import {
  Box,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  useTheme,
} from "@mui/material";
import React from "react";

const actions = [
  { icon: <FileCopy />, name: "Copy" },
  { icon: <Save />, name: "Save" },
  { icon: <Print />, name: "Print" },
  { icon: <Share />, name: "Share" },
];

const CustomCloseIcon = () => {
  const theme = useTheme();
  return (
    <Box>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{
          position: "fixed",
          right: theme.spacing(2),
          bottom: theme.spacing(2),
        }}
        icon={<SpeedDialIcon openIcon={<Edit />} />}
      >
        {actions.map(({ icon, name }) => (
          <SpeedDialAction key={name} icon={icon} tooltipTitle={name} />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default CustomCloseIcon;
