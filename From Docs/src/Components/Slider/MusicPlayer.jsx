import styled from "@emotion/styled";
import { Box, IconButton, Slider, Stack, Typography } from "@mui/material";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import React, { useState } from "react";

const WallPaper = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
  background: "linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)",
  transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
  "&::before": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    top: "-40%",
    right: "-50%",
    background:
      "radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)",
  },
  "&::after": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    bottom: "-50%",
    left: "-30%",
    background:
      "radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)",
    transform: "rotate(30deg)",
  },
});
const Widget = styled("div")({
  padding: 16,
  borderRadius: 16,
  width: 343,
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor: "rgba(0,0,0,0.6)",
  backdropFilter: "blur(40px)",
});
const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  background: "rgba(0, 0, 0, 0.08)",
  "& > img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const MusicPlayer = () => {
  const duration = 200;
  const [position, setPosition] = useState(32);
  const [paused, setPaused] = useState(false);
  const formatDuration = (value) => {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  };
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      <Widget>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CoverImage>
            <img
              src="https://mui.com/static/images/sliders/chilling-sunday.jpg"
              alt="Music image"
            />
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <Typography>Jun Pulse</Typography>
            <Typography noWrap>
              <b>คนเก่าเขาทำไว้ดี (Can&apos;t win)</b>
            </Typography>
            <Typography noWrap letterSpacing={-0.25}>
              Chilling Sunday &mdash; คนเก่าเขาทำไว้ดี
            </Typography>
          </Box>
        </Box>
        <Slider
          size="small"
          min={0}
          step={1}
          value={position}
          max={duration}
          onChange={(_, newValue) => setPosition((prev) => newValue)}
          sx={{
            color: "#fff",
            height: 4,
            "& .MuiSlider-thumb": {
              width: 8,
              height: 8,
              transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
              "&::before": {
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 8px rgb(0 0 0 / 16%)`,
              },
              "&.Mui-active": {
                width: 20,
                height: 20,
                background: "#fff",
              },
            },
            "& .MuiSlider-rail": {
              opacity: 0.28,
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: -2,
          }}
        >
          <TinyText>{formatDuration(position)}</TinyText>
          <TinyText> -{formatDuration(duration - position)}</TinyText>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: -1,
          }}
        >
          <IconButton sx={{ color: "#fff" }}>
            <FastRewindRounded fontSize="large" />
          </IconButton>
          <IconButton
            sx={{ color: "#fff" }}
            onClick={() => setPaused((prev) => !prev)}
          >
            {paused ? (
              <PlayArrowRounded sx={{ fontSize: "3rem" }} />
            ) : (
              <PauseRounded sx={{ fontSize: "3rem" }} />
            )}
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <FastForwardRounded stRewindRounded fontSize="large" />
          </IconButton>
        </Box>
        <Stack
          direction={"row"}
          gap={2}
          alignItems={"center"}
          sx={{ mb: 1, px: 1 }}
        >
          <VolumeDownRounded htmlColor="#fff" />
          <Slider
            aria-label="Volume"
            defaultValue={30}
            sx={{
              color: "#fff",
              "& .MuiSlider-track": {
                border: "none",
              },
              "& .MuiSlider-thumb": {
                width: 24,
                height: 24,
                backgroundColor: "#fff",
                "&::before": {
                  boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible, &.Mui-active": {
                  boxShadow: "none",
                },
              },
            }}
          />
          <VolumeUpRounded htmlColor="#fff" />
        </Stack>
      </Widget>
      <WallPaper />
    </Box>
  );
};

export default MusicPlayer;
