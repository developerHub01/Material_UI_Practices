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

const InvertedTrack = () => {
  return (
    <Box sx={{ width: 300 }}>
      <Typography gutterBottom>Inverted track</Typography>
      <Slider track="inverted" defaultValue={30} marks={marks} />

      <Box my={2} />

      <Typography gutterBottom>Inverted track range</Typography>
      <Slider track="inverted" defaultValue={[20, 37]} marks={marks} />
    </Box>
  );
};

export default InvertedTrack;
