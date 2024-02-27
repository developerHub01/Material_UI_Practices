import { Backdrop, Button, CircularProgress, Stack } from "@mui/material";
import React, { useState } from "react";

const MainBackdrop = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen((prev) => false);
  const handleOpen = () => setOpen((prev) => true);
  return (
    <Stack minHeight={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Button variant="contained" onClick={handleOpen}>
        Show Backdrop
      </Button>
      <Backdrop open={open} onClick={handleClose} sx={{ color: "#fff" }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Stack>
  );
};

export default MainBackdrop;
