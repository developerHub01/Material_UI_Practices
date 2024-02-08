import { Slider, Stack } from "@mui/material";
import React from "react";

const Colors = () => {
  return (
    <Stack sx={{ width: "100%", maxWidth: 300 }}>
      <Slider defaultValue={30} color="error" />
      <Slider defaultValue={30} color="info" />
      <Slider defaultValue={30} color="primary" />
      <Slider defaultValue={30} color="secondary" valueLabelDisplay="auto" />
      <Slider defaultValue={30} color="success" />
      <Slider defaultValue={30} color="warning" />
    </Stack>
  );
};

export default Colors;
