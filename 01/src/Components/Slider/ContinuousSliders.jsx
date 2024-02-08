import { Slider, Stack } from "@mui/material";
import React, { useState } from "react";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

const ContinuousSliders = () => {
  const [value, setValue] = useState(30);
  const handleChange = (e, newValue) => {
    setValue((prev) => newValue);
  };
  return (
    <Stack gap={2}>
      <Stack
        sx={{ width: 300 }}
        direction="row"
        gap={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
      <Stack
        sx={{ width: 300 }}
        direction="row"
        gap={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VolumeDown />
        <Slider aria-label="Volume" defaultValue={50} disabled />
        <VolumeUp />
      </Stack>
    </Stack>
  );
};

export default ContinuousSliders;
