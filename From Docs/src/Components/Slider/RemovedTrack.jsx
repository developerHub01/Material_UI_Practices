import { Box, Slider, Typography } from "@mui/material";
import React from "react";

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

const RemovedTrack = () => {
  return (
    <Box sx={{ width: 300 }}>
      <Typography gutterBottom>Removed track</Typography>
      <Slider defaultValue={30} marks={marks} track={false} />
      <Box my={2} />
      <Typography gutterBottom>Removed track range slider</Typography>
      <Slider track={false} defaultValue={[20, 37, 50]} marks={marks} />
    </Box>
  );
};

export default RemovedTrack;
