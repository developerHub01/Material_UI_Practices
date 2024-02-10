import React, { useState } from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Divider, Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormatAlignCenter from "@mui/icons-material/FormatAlignCenter";

const Customization = () => {
  const [alignment, setAlignment] = useState("left");
  const [formats, setFormats] = useState([]);
  const handleAlignment = (_, newValue) => {
    setAlignment((prev) => newValue);
  };
  const handleFormats = (_, newValue) => {
    setFormats((prev) => newValue);
  };
  return (
    <div>
      <Paper
        sx={{
          display: "flex",
          border: "1px solid #ddd",
          flexWrap: "wrap",
        }}
      >
        <ToggleButtonGroup
          size="small"
          value={alignment}
          onChange={handleAlignment}
          exclusive
        >
          <ToggleButton value="left" aria-label="left">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="center">
            <FormatAlignCenter />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justify" disabled>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <ToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormats}
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="color" aria-label="coor">
            <FormatColorFillIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Paper>
    </div>
  );
};

export default Customization;
