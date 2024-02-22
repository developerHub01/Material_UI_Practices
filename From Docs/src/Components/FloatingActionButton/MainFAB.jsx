import { Fab, Stack, Typography } from "@mui/material";
import React from "react";
import {
  AccessTimeFilledOutlined,
  Add,
  BluetoothDisabled,
  Check,
  Delete,
  DeleteOutline,
  Edit,
} from "@mui/icons-material";

const MainFAB = () => {
  return (
    <Stack
      direction="row"
      gap={3}
      flexWrap="wrap"
      p={3}
      justifyContent="center"
      alignItems="center"
    >
      <Fab color="primary">
        <Add />
      </Fab>
      <Fab color="secondary">
        <Edit />
      </Fab>
      <Fab color="error" variant="circular">
        <Delete />
      </Fab>
      <Fab color="info" variant="extended">
        <DeleteOutline />
      </Fab>
      <Fab color="success" variant="extended">
        <Check sx={{ mr: 1 }} />
        Save
      </Fab>
      <Fab disabled color="warning" variant="extended">
        <BluetoothDisabled sx={{ mr: 1 }} />
        <Typography variant="body2">Not Allowed</Typography>
      </Fab>
      <Fab color="warning" size="small">
        <AccessTimeFilledOutlined />
      </Fab>
      <Fab color="warning" size="medium">
        <AccessTimeFilledOutlined />
      </Fab>
      <Fab color="warning" size="large">
        <AccessTimeFilledOutlined />
      </Fab>
    </Stack>
  );
};

export default MainFAB;
