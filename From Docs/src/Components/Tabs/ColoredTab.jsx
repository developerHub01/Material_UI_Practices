import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

const TabContent = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <Box hidden={value !== index} {...other} p={2}>
      <Typography>{children}</Typography>
    </Box>
  );
};

const ColoredTab = () => {
  const [value, setValue] = useState("one");
  const handleTabChange = (e, newValue) => {
    setValue((prev) => newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab value="one" label="Item One" />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" />
          <Tab value="four" label="Item Four" />
        </Tabs>
      </Box>
      <Box sx={{ width: "100%" }}>
        <TabContent index={value} value="one">
          This is first tab content
        </TabContent>
        <TabContent index={value} value="two">
          This is second tab content
        </TabContent>
        <TabContent index={value} value="three">
          This is thired tab content
        </TabContent>
        <TabContent index={value} value="four">
          This is fourth tab content
        </TabContent>
      </Box>
    </Box>
  );
};

export default ColoredTab;
