import { Slider, Stack } from "@mui/material";
import React, { useState } from "react";

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

const DiscreteSliders = () => {
  const [firstValueRangeSlider, setFirstValueRangeSlider] = useState([30, 70]);
  const handleFirstValueRangeSlider = (e, newValue) => {
    if (Math.abs(newValue[0] - newValue[1]) <= 20) return;
    setFirstValueRangeSlider((prev) => newValue);
  };
  return (
    <Stack gap={2} sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        valueLabelDisplay="auto"
        getAriaValueText={(e) => console.log(e)}
        onChange={(e, newValue) => console.log("===> " + newValue)}
        step={10}
        marks
        min={10}
        max={110}
      />
      <Slider
        aria-label="Small steps"
        defaultValue={0.00000005}
        step={0.00000001}
        marks
        min={-0.00000005}
        max={0.0000001}
        valueLabelDisplay="auto"
      />
      {/* Custom marks */}
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        // step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />

      {/* Restricted values
      use step={null}
      */}
      <Slider
        aria-label="Restricted values"
        defaultValue={20}
        step={null}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => {
          return marks.findIndex((item) => item.value === value) + 1;
        }}
        marks={marks}
      />

      {/* 
      
      Range slider

      by passing array in value
      */}

      <Slider
        value={firstValueRangeSlider}
        valueLabelDisplay="auto"
        onChange={handleFirstValueRangeSlider}
      />
    </Stack>
  );
};

export default DiscreteSliders;
