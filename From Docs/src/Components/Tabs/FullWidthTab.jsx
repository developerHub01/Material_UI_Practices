import { AppBar, Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const FullWidthTab = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          width: "100%",
          maxWidth: 800,
          borderRadius: 1.5,
          overflow: "hidden",
          boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
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
            <Tab label="Item One" value={0} />
            <Tab label="Item Two" value={1} />
            <Tab label="Item Three" value={2} />
          </Tabs>
        </AppBar>
        <Box
          sx={{
            background: "#212121",
            borderTop: 2,
            borderColor: "#fff",
            color: "#fff",
          }}
        >
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
};

export default FullWidthTab;
