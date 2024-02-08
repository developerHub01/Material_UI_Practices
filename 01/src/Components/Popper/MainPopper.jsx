import { Stack } from "@mui/material";
import React from "react";
import BasicPopper from "./BasicPopper";

const MainPopper = () => {
  return (
    <Stack direction="column" useFlexGap spacing={4}>
      <BasicPopper />
    </Stack>
  );
};

export default MainPopper;
