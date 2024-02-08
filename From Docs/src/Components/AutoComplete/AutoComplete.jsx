import React from "react";
import ComboBox from "./ComboBox";
import Country from "./Country";
import { Stack } from "@mui/material";
import FreeSolo from "./FreeSolo";

const AutoComplete = () => {
  return (
    <Stack direction="column" gap={2} maxWidth={300} width="100%">
      <ComboBox />
      <Country />
      <FreeSolo />
    </Stack>
  );
};

export default AutoComplete;
