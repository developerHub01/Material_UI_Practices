import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const MainPaper = () => {
  return (
    <Stack gap={3}>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        sx={{
          "& > *": {
            m: 1,
            width: 120,
            height: 120,
          },
        }}
      >
        <Paper elevation={0} sx={{ bgcolor: "#212121" }} />
        <Paper />
        <Paper elevation={3} />
        <Paper elevation={24} variant="elevation" />

        {/* 
        <Paper elevation={24} variant="outlined" />
        
        Combining `elevation={24}` with `variant="outlined"` has no effect. Either use `elevation={0}` or use a different `variant`.
      */}
        <Paper variant="outlined" />

        <Typography variant="h4" textAlign="center">
          Corners square
        </Typography>
        <Paper square sx={{ bgcolor: "#212121" }} />
        <Box className="MuiPaper-root"></Box>
      </Box>
    </Stack>
  );
};

export default MainPaper;
