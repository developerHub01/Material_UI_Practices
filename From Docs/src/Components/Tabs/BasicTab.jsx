import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={index !== value} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const BasicTab = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleChange = (e, newValue) => {
    setActiveIndex((prev) => newValue);
  };
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={activeIndex} onChange={handleChange}>
          <Tab label="Tab One" />
          <Tab label="Tab Two" />
          <Tab label="Tab Three" />
        </Tabs>
      </Box>
      <CustomTabPanel value={activeIndex} index={0}>
        Tab Content One
      </CustomTabPanel>
      <CustomTabPanel value={activeIndex} index={1}>
        Tab Content Two
      </CustomTabPanel>
      <CustomTabPanel value={activeIndex} index={2}>
        Tab Content Three
      </CustomTabPanel>
    </Box>
  );
};

export default BasicTab;
