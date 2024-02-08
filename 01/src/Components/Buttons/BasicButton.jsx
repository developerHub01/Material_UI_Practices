import { Button } from "@mui/material";
import React from "react";

const BasicButton = () => {
  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained">Text</Button>
      <Button variant="outlined">Text</Button>
      <Button variant="outlined" disabled>
        Text
      </Button>
      <Button variant="contained" disableElevation>
        Text
      </Button>
      <Button variant="contained" disableRipple>
        Text
      </Button>
      <Button variant="contained" disableTouchRipple>
        Text
      </Button>
      <Button variant="contained" size="large">
        Text
      </Button>
      <Button variant="contained" size="medium">
        Text
      </Button>
      <Button variant="contained" size="small">
        Text
      </Button>
    </>
  );
};

export default BasicButton;
