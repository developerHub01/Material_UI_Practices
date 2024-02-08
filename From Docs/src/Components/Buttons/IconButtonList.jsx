import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const IconButtonList = () => {
  return (
    <>
      <IconButton aria-label="Delete" size="small" color="error">
        <DeleteIcon fontSize="large" color="secondary" />
      </IconButton>

      <IconButton aria-label="Delete" size="large" color="primary">
        <DeleteIcon fontSize="small" color="secondary" />
      </IconButton>
    </>
  );
};

export default IconButtonList;
