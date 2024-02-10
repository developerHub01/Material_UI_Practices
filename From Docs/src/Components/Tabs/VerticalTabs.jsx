import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      {...other}
      sx={{ borderLeft: 2, borderColor: "#fff", width: "100%" }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

const VerticalTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box p={3}>
      <Box
        sx={{
          height: 250,
          display: "flex",
          bgcolor: "#212121",
          width: "100%",
          maxWidth: 800,
          borderRadius: 1.5,
          overflow: "hidden",
          boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.2)",
          color: "#fff",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          orientation="vertical"
          variant="scrollable"
          sx={{
            width: "100%",
            maxWidth: 220,
            flexShrink: 0,
            flexGrow: 0,
            borderRidght: 1,
            borderColor: "divider",
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
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <TabPanel value={value} index={i}>
              Item {i + 1}
            </TabPanel>
          ))}
      </Box>
    </Box>
  );
};

export default VerticalTabs;
