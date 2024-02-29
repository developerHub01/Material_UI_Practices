import { Favorite, LocationOn, Restore } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import React, { useState } from "react";

const BottomNavigationComp = () => {
  const [value, setValue] = useState(0);
  return (
    <Box sx={{ maxWidth: "500px", width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(e, newValue) => {
          console.log(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<Restore />} />
        <BottomNavigationAction label="Favourites" icon={<Favorite />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavigationComp;
