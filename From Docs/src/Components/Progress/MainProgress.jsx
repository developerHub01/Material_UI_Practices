import { Check, Save } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Fab,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import React, { useEffect, useRef, useState } from "react";

const MainProgress = () => {
  const [progress1, setProgress1] = useState(0);
  const [loading1, setLoading1] = useState(false);
  const [success1, setSuccess1] = useState(false);
  const [progress2, setProgress2] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const timer = useRef();
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress1((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    const progress = setTimeout(() => {
      if (progress2 >= 100) {
        setProgress2((prev) => 0);
        setBuffer((prev) => 10);
      } else {
        const diff = Math.random() * 10;
        setProgress2((prev) => progress2 + diff);
        setBuffer((prev) => progress2 + diff + Math.random() * 10);
      }
    }, 500);
    return () => clearTimeout(progress);
  }, [progress2, buffer]);
  const handleClick = () => {
    if (!loading1) {
      setSuccess1((prev) => false);
      setLoading1((prev) => true);
      timer.current = setTimeout(() => {
        setSuccess1((prev) => true);
        setLoading1((prev) => false);
      }, 2000);
    }
  };
  const successButtonSx = {
    ...(success1 && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[500],
      },
    }),
  };
  return (
    <Stack justifyContent={"center"} alignItems={"center"} gap={3} p={4}>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
        flexWrap={"wrap"}
      >
        <CircularProgress color="warning" />
        <CircularProgress color="success" disableShrink />
        <CircularProgress variant="determinate" value={25} />
        <CircularProgress variant="determinate" value={50} />
        <CircularProgress variant="determinate" value={75} />
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress
            sx={{
              "&.MuiCircularProgress-root": {
                width: "80px !important",
                height: "80px !important",
              },
            }}
            variant="determinate"
            value={progress1}
          />
          <Typography sx={{ position: "absolute" }}>{progress1}%</Typography>
        </Box>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Fab
            aria-label="save"
            color="primary"
            onClick={handleClick}
            sx={successButtonSx}
          >
            {success1 ? <Check /> : <Save />}
          </Fab>
          {loading1 && (
            <CircularProgress
              size={68}
              sx={{
                color: green[500],
                position: "absolute",
              }}
            />
          )}
        </Box>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            disabled={loading1}
            onClick={handleClick}
            sx={successButtonSx}
          >
            Accept terms
          </Button>
          {loading1 && (
            <CircularProgress
              size={24}
              sx={{
                color: green[500],
                position: "absolute",
              }}
            />
          )}
        </Box>
      </Stack>
      <Stack gap={2} sx={{ width: "80%", maxWidth: 500 }}>
        <LinearProgress color="warning" />
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={progress1}
        />
      </Stack>

      <Stack gap={2} sx={{ width: "80%", maxWidth: 500 }}>
        <LinearProgress
          variant="buffer"
          value={progress2}
          valueBuffer={buffer}
        />
      </Stack>
    </Stack>
  );
};

export default MainProgress;
