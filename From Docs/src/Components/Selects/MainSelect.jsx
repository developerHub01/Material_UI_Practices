import { Stack } from "@mui/material";
import React from "react";
import BasicSelect from "./BasicSelect";
import MultipleSelect from "./MultipleSelect";

const MainSelect = () => {
  return (
    <Stack p={3} gap={2}>
      <BasicSelect />
      <MultipleSelect />
    </Stack>
  );
};

export default MainSelect;
