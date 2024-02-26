import styled from "@emotion/styled";
import { Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  ClickAwayListener,
  Fade,
  Grid,
  IconButton,
  Link,
  Paper,
  Stack,
  Tooltip,
  Typography,
  Zoom,
  tooltipClasses,
} from "@mui/material";
import React, { useRef, useState } from "react";

const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});
const NoMaxWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: "none",
  },
});

const MainTooltip = () => {
  const [open, setOpen] = useState(false);
  const handleTooltipOpen = () => {
    setOpen((prev) => true);
  };
  const handleTooltipClose = () => {
    setOpen((prev) => false);
  };

  return (
    <Stack
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
      p={4}
    >
      <Tooltip title="Delete">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Box
        sx={{
          width: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          flexWrap: "wrap",
        }}
      >
        <Tooltip title="Add" placement="top-start">
          <Button variant="outlined">top-start</Button>
        </Tooltip>
        <Tooltip title="Add" placement="top">
          <Button variant="outlined">Top</Button>
        </Tooltip>
        <Tooltip title="Add" placement="top-end">
          <Button variant="outlined">top-end</Button>
        </Tooltip>
        <Tooltip title="Add" placement="bottom-start">
          <Button variant="outlined">bottom-start</Button>
        </Tooltip>
        <Tooltip title="Add" placement="bottom">
          <Button variant="outlined">Bottom</Button>
        </Tooltip>
        <Tooltip title="Add" placement="bottom-end">
          <Button variant="outlined">Bottom-end</Button>
        </Tooltip>
        <Tooltip title="Add" placement="left-start">
          <Button variant="outlined">Left-start</Button>
        </Tooltip>
        <Tooltip title="Add" placement="left">
          <Button variant="outlined">Left</Button>
        </Tooltip>
        <Tooltip title="Add" placement="left-end">
          <Button variant="outlined">Left-end</Button>
        </Tooltip>
        <Tooltip title="Add" placement="right-start">
          <Button variant="outlined">Right-start</Button>
        </Tooltip>
        <Tooltip title="Add" placement="right-start">
          <Button variant="outlined">right-start</Button>
        </Tooltip>
        <Tooltip title="Add" placement="right">
          <Button variant="outlined">right</Button>
        </Tooltip>
        <Tooltip title="Add" placement="right-end">
          <Button variant="outlined">Right-end</Button>
        </Tooltip>
      </Box>
      <Box>
        <Tooltip
          title={
            <React.Fragment>
              <Paper p={2}>
                <Typography variant="h6">Tooltip with HTML</Typography>
                <Typography variant="body2">
                  And here's some <Link href="/">amazing content</Link>. It's
                  very engaging. Right?
                </Typography>
              </Paper>
            </React.Fragment>
          }
        >
          <Button variant="contained" color="primary">
            HTML
          </Button>
        </Tooltip>
      </Box>
      <Tooltip title="Add" arrow>
        <Button variant="contained">Arrow</Button>
      </Tooltip>
      <Tooltip
        title="Add"
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, -10],
                },
              },
            ],
          },
        }}
      >
        <Button variant="contained">Offset</Button>
      </Tooltip>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Tooltip title="Add" disableFocusListener>
          <Button>Hover or toch</Button>
        </Tooltip>
        <Tooltip title="Add" disableHoverListener>
          <Button>Focus or touch</Button>
        </Tooltip>
        <Tooltip title="Add" disableFocusListener disableTouchListener>
          <Button>Hover</Button>
        </Tooltip>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Tooltip
            title="Add"
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
          >
            <Button onClick={handleTooltipOpen}>Click</Button>
          </Tooltip>
        </ClickAwayListener>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Tooltip title={longText}>
          <Button>Default Width [300px]</Button>
        </Tooltip>
        <CustomWidthTooltip title={longText}>
          <Button>Custom Width [500px]</Button>
        </CustomWidthTooltip>
        <NoMaxWidthTooltip title={longText}>
          <Button>No wrapping</Button>
        </NoMaxWidthTooltip>
      </Box>
      <Tooltip title="You don't have permission to do this">
        <span>
          <Button disabled>A Disabled button</Button>
        </span>
      </Tooltip>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Tooltip title="Add">
          <Button>Grow</Button>
        </Tooltip>
        <Tooltip
          title="Add"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <Button>Fade</Button>
        </Tooltip>
        <Tooltip title="Add" TransitionComponent={Zoom}>
          <Button>Zoom</Button>
        </Tooltip>
      </Box>
      <Tooltip title="You don't have permission to do this">
        <Box sx={{ bgcolor: "text.disabled", color: "background.paper", p: 2 }}>
          Diabled Action
        </Box>
      </Tooltip>
      <Tooltip title="Add" enterDelay={500} leaveDelay={100}>
        <Button variant="contained">[500ms, 200ms]</Button>
      </Tooltip>
    </Stack>
  );
};

export default MainTooltip;
