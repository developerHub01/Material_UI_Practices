import { Check, Close } from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Collapse,
  IconButton,
  Stack,
} from "@mui/material";
import React, { useState } from "react";

const MainAlert = () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
      p={3}
    >
      <Alert severity="success" icon={<Check />}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        accusamus.
      </Alert>
      <Alert severity="warning" variant="standard">
        Alert standard example
      </Alert>
      <Alert severity="info" variant="outlined">
        Alert outlined example
      </Alert>
      <Alert severity="error" variant="filled">
        Alert filled example
      </Alert>
      <Alert severity="success" color="warning">
        Alert with color props
      </Alert>
      <Alert severity="warning" onClose={() => {}}>
        This will disply action just for using a onClose props
      </Alert>
      <Alert
        severity="success"
        action={
          <Button color="inherit" variant="outlined" size="small">
            UNDO
          </Button>
        }
      >
        Alert with action props
      </Alert>
      <Alert variant="filled" severity="success" icon={false}>
        Alert without icon
      </Alert>

      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert with title
      </Alert>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "start",
        }}
      >
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => setOpen((prev) => false)}
              >
                <Close />
              </IconButton>
            }
          >
            Click to close the alert
          </Alert>
        </Collapse>
        <Button
          disabled={open}
          variant="outlined"
          onClick={() => setOpen((prev) => true)}
        >
          Re-open
        </Button>
      </Box>
    </Stack>
  );
};

export default MainAlert;
