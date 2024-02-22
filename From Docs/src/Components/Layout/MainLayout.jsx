import React from "react";
import GridLayout from "./GridLayout";
import { Box, Stack } from "@mui/material";

const MainLayout = () => {
  return (
    <Stack direction="column" gap={2}>
      <GridLayout />
    </Stack>
  );
};

export default MainLayout;
