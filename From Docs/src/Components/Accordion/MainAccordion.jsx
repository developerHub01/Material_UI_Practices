import { Stack } from "@mui/material";
import React from "react";
import Introduction from "./Introduction";

const MainAccordion = () => {
  return (
    <Stack direction="column" gap={3} p={3}>
      <Introduction />
    </Stack>
  );
};

export default MainAccordion;
