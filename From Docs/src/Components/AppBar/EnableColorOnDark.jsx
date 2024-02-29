import { Menu } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const AppContent = ({ labelText }) => {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-labe="menu" sx={{ mr: 2 }}>
        <Menu />
      </IconButton>
      <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
        {labelText}
      </Typography>
    </Toolbar>
  );
};

const EnableColorOnDark = () => {
  return (
    <Stack p={3} gap={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          <AppContent labelText="enableColorOnDark" />
        </AppBar>
        <AppBar position="static" color="primary">
          <AppContent labelText="default" />
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
};

export default EnableColorOnDark;
