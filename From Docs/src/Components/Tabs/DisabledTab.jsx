import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

const ActiveTabContent = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <Box hidden={value !== index} {...other} sx={{ p: 2 }}>
      <Typography>{children}</Typography>
    </Box>
  );
};

const DisabledTab = () => {
  const [value, setValue] = useState(0);
  return (
    <Box>
      <Tabs
        value={value}
        onChange={(_, newValue) => setValue((prev) => newValue)}
      >
        <Tab label="Active" />
        <Tab label="Disabled" disabled />
        <Tab label="Active" />
      </Tabs>
      <ActiveTabContent value={0} index={value}>
        This is an active tab one
      </ActiveTabContent>
      <ActiveTabContent value={1} index={value}>
        This is an disabled tab
      </ActiveTabContent>
      <ActiveTabContent value={2} index={value}>
        This is an active tab
      </ActiveTabContent>
    </Box>
  );
};

export default DisabledTab;
