import { Stack, Chip, Avatar, Box } from "@mui/material";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import FaceIcon from "@mui/icons-material/Face";

const BasicChip = () => {
  return (
    <Stack direction="row" flexWrap="wrap" gap={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="filled" />
      <Chip label="Chip Outlined" variant="outlined" />
      <Chip label="Clickable" onClick={() => console.log("Clicked")} />
      <Chip label="Deleteable" onDelete={() => console.log("Deleted")} />
      <Chip
        label="Clickaable Deleteable"
        onClick={() => console.log("Clicked")}
        onDelete={() => console.log("Deleted")}
      />
      <Chip label="Clickable Without Link Or Handler" clickable />
      <Chip label="Clickable Link" component="a" href="/" clickable />

      {/* Custom delte icons */}
      <Chip
        label="Custom Delete Icon"
        deleteIcon={<DoneIcon />}
        onClick={() => console.log("Click")}
        onDelete={() => console.log("Delete")}
      />
      <Chip
        label="Custom Delete Icon"
        variant="outlined"
        deleteIcon={<DeleteIcon />}
        onClick={() => console.log("Click")}
        onDelete={() => console.log("Delete")}
      />

      {/* Avatar */}
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Avatar"
        clickable
        variant="outlined"
      />
      <Chip
        avatar={
          <Avatar
            alt="Avatar"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
        }
        clickable
        label="Avatar Man"
      />

      {/* Icon clip */}
      <Chip icon={<FaceIcon />} label="Face Icon" clickable />
      <Chip
        icon={<FaceIcon />}
        label="Face Icon"
        variant="outlined"
        clickable
      />

      {/* Color */}
      <Chip label="Primary" color="primary" clickable />
      <Chip
        label="Delete"
        icon={<DeleteIcon />}
        variant="outlined"
        color="warning"
        onDelete={() => console.log("Deleted")}
        onClick={() => console.log("Clicked")}
      />

      {/* Sizes */}
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />

      {/* Multiline */}
      <Box
        sx={{
          width: 120,
        }}
      >
        <Chip
          sx={{
            height: "auto",
            "& .MuiChip-label": {
              display: "block",
              whiteSpace: "normal",
            },
          }}
          label="This is a chip that has multiple lines."
        />
      </Box>
    </Stack>
  );
};

export default BasicChip;
