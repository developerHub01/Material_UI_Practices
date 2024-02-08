import { Slider, Stack } from "@mui/material";
import React, { useState } from "react";

const minDistance = 10;

const MinimumDistance = () => {
  const [value1, setValue1] = useState([20, 60]);
  const [value2, setValue2] = useState([20, 60]);

  const handleChange1 = (e, newValue, activeThumb) => {
    if (!activeThumb)
      setValue1((prev) => [
        Math.min(newValue[0], Math.abs(newValue[1] - minDistance)),
        newValue[1],
      ]);
    else
      setValue1((prev) => [
        newValue[0],
        Math.max(newValue[1], newValue[0] + minDistance),
      ]);
  };
  const handleChange2 = (e, newValue, activeThumb) => {
    console.log(activeThumb);
    if (newValue[1] - newValue[0] < minDistance) {
      if (!activeThumb) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2((prev) => [clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2((prev) => [clamped - minDistance, clamped]);
      }
    } else setValue2((prev) => newValue);
  };

  return (
    <Stack width={300} gap={2}>
      <Slider
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        disableSwap
      />
      <Slider
        value={value2}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        disableSwap
      />
    </Stack>
  );
};

export default MinimumDistance;
