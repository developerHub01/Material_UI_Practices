import { Slider, Stack } from "@mui/material";
import React from "react";

const Sizes = () => {
  return (
    <Stack sx={{ width: 300 }}>
      <Slider size="small" defaultValue={70} valueLabelDisplay="auto" />
      <Slider size="small" defaultValue={70} valueLabelDisplay="off" />
      <Slider size="small" defaultValue={70} valueLabelDisplay="on" />
    </Stack>
  );
};

export default Sizes;
