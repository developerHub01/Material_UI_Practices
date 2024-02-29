import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

const ScrollableTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box p={3}>
      <Box
        sx={{
          bgcolor: "#212121",
          width: "100%",
          maxWidth: 800,
          borderRadius: 1.5,
          overflow: "hidden",
          boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButton="auto"
          allowScrollButtonsMobile
          sx={{
            "& .MuiButtonBase-root": {
              background: "#212121",
              color: "#fff",
            },
            "& .Mui-selected": {
              background: "#fff",
              color: "#212121",
            },
            "& .MuiTabs-indicator": {
              background: "#212121",
            },
          }}
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
          <Tab label="Item Eight" />
          <Tab label="Item None" />
          <Tab label="Item Ten" />
        </Tabs>
      </Box>
    </Box>
  );
};

export default ScrollableTabs;
