import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React from "react";
import styled from "@emotion/styled";

const VisuallyHiddenInput = styled("input")({
  display: "none",
});

const FileUploadButton = () => {
  return (
    <Button
      component="label"
      startIcon={<CloudUploadIcon />}
      variant="contained"
    >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
  );
};

export default FileUploadButton;
