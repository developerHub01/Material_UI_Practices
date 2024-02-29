import { Favorite, Folder, LocationOn, Restore } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";

const BottomNavigationWithNoLabel = () => {
  const [value, setValue] = useState("recents");
  const handleChange = (_, newValue) => {
    setValue((prev) => newValue);
  };
  return (
    <BottomNavigation
      sx={{ maxWidth: "500px" }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Recents"
        value={"recents"}
        icon={<Restore />}
      />
      <BottomNavigationAction
        label="Favorites"
        value={"favorites"}
        icon={<Favorite />}
      />
      <BottomNavigationAction
        label="Nearby"
        value={"nearby"}
        icon={<LocationOn />}
      />
      <BottomNavigationAction
        label="Folder"
        value={"folder"}
        icon={<Folder />}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationWithNoLabel;
