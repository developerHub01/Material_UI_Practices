import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";

const KeyboardNavigation = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box p={3}>
      <Box
        sx={{
          width: "100%",
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
          selectionFollowsFocus
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
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
        </Tabs>
      </Box>
    </Box>
  );
};

export default KeyboardNavigation;
