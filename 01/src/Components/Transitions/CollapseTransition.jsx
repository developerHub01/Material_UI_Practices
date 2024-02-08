import {
  Box,
  Button,
  Collapse,
  Fade,
  Grow,
  Slide,
  Stack,
  Zoom,
} from "@mui/material";
import React, { useRef, useState } from "react";

const BoxItem = (
  <Box
    sx={{
      width: 100,
      height: 100,
      background: "red",
    }}
  ></Box>
);

const CollapseTransition = () => {
  const [collapseState, setCollapeState] = useState(false);
  const wrapperRef = useRef(null);
  return (
    <>
      <Button
        variant="contained"
        onClick={() => setCollapeState((prev) => !prev)}
        ref={wrapperRef}
      >
        {collapseState ? "Show" : "Collaps"}
      </Button>
      <Stack direction="row" gap={2} flexWrap="wrap" overflow="hidden">
        <Collapse orientation="horizontal" in={collapseState} unmountOnExit>
          {BoxItem}
        </Collapse>
        <Collapse orientation="vertical" in={collapseState} collapsedSize={30}>
          {BoxItem}
        </Collapse>

        <Fade in={collapseState}>{BoxItem}</Fade>

        <Grow in={collapseState}>{BoxItem}</Grow>
        <Grow
          in={collapseState}
          timeout={1000} // it will work on both in and out
        >
          {BoxItem}
        </Grow>
        <Grow
          in={collapseState}
          {...{ timeout: collapseState ? 1500 : 500 }} // it will in 1500ms and out in 500ms
        >
          {BoxItem}
        </Grow>

        <Grow
          in={collapseState}
          timeout={1500}
          style={{
            transformOrigin: "0 0",
          }}
        >
          {BoxItem}
        </Grow>

        <Slide
          direction="down"
          /* This is the default direction */ in={collapseState}
          container={
            wrapperRef.current
          } /* It is used to define the container of that slider. it may be usefull when we want to fixed an edge or define visibility in a dom element */
        >
          {BoxItem}
        </Slide>
        <Slide direction="left" in={collapseState}>
          {BoxItem}
        </Slide>
        <Slide direction="right" in={collapseState}>
          {BoxItem}
        </Slide>
        <Slide direction="up" in={collapseState}>
          {BoxItem}
        </Slide>

        <Zoom in={collapseState}>{BoxItem}</Zoom>
        <Zoom
          in={collapseState}
          style={{
            transitionDelay: collapseState ? "500ms" : "0ms",
          }}
        >
          {BoxItem}
        </Zoom>

        {/* 
        Here is a problem when component is unmounted then still it exist in dom tree. so if that component is very large then we can remove it when component is unmounted by "  unmountOnExit "        
        */}
        <Grow
          in={collapseState}
          timeout={1500}
          style={{
            transformOrigin: "0 0",
          }}
          unmountOnExit
        >
          {BoxItem}
        </Grow>
      </Stack>

      <Stack></Stack>
    </>
  );
};

export default CollapseTransition;
