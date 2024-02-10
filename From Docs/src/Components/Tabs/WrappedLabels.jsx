import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

const TabContent = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <Box sx={{ width: "100%", p: 2 }} hidden={value !== index} {...other}>
      <Typography>{children}</Typography>
    </Box>
  );
};

const WrappedLabels = () => {
  const [currentIndex, setCurrentIndex] = useState("one");
  const handleOnChange = (e, newValue) => {
    setCurrentIndex((prev) => newValue);
  };
  return (
    <Box p={2}>
      <Box sx={{ width: "100%", border: 1, borderColor: "divider" }}>
        <Box sx={{ width: "100%" }}>
          <Tabs value={currentIndex} onChange={handleOnChange}>
            <Tab
              value="one"
              label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
              wrapped
            />
            <Tab value="two" label="Tab Two" />
            <Tab value="three" label="Tab Three" />
          </Tabs>
        </Box>
        <Box sx={{ width: "100%" }}>
          <TabContent value="one" index={currentIndex}>
            Tab One Content
          </TabContent>
          <TabContent value="two" index={currentIndex}>
            Tab Two Content
          </TabContent>
          <TabContent value="three" index={currentIndex}>
            Tab Three Content
          </TabContent>
        </Box>
      </Box>
    </Box>
  );
};

export default WrappedLabels;
