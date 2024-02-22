import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default App;
