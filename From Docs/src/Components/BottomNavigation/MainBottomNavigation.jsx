import { Stack } from "@mui/material";
import React from "react";
import BottomNavigationWithNoLabel from "./BottomNavigationWithNoLabel";
import FixedPositioning from "./FixedPositioning";
import BottomNavigationComp from "./BottomNavigationComp";

const MainBottomNavigation = () => {
  return (
    <Stack>
      {/* <BottomNavigationComp /> */}
      {/* <BottomNavigationWithNoLabel /> */}
      <FixedPositioning />
    </Stack>
  );
};

export default MainBottomNavigation;
