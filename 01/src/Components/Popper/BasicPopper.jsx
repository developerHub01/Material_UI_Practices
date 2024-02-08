import { Box, Button, Fade, Popper, Typography } from "@mui/material";
import React, { useState } from "react";

const BasicPopper = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => {
    setAnchorEl((prev) => (prev ? null : e.currentTarget));
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <Box my={10} mx={15}>
      <Button
        aria-describedby={id}
        id="popper_controller"
        variant="contained"
        onClick={handleClick}
      >
        Toggle Popper
        <br />
        Toggle Popper
      </Button>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        // placement="auto"
        // placement="auto-end"
        // placement="auto-start"
        // placement="bottom-start"
        // placement="bottom"
        // placement="bottom-end"
        // placement="left-start"
        // placement="left"
        // placement="left-end"
        // placement="right-start"
        // placement="right"
        // placement="right-end"
        // placement="top-start"
        // placement="top"
        placement="top-end"
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Box
              sx={{
                border: 1,
                p: 1,
                background: "#313131",
                color: "#fff",
              }}
            >
              This is a popper
            </Box>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

export default BasicPopper;
