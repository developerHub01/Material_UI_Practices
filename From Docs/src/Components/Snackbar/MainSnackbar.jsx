import {
  Alert,
  AppBar,
  Box,
  Button,
  Fab,
  Fade,
  Grow,
  IconButton,
  Slide,
  Snackbar,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Add, Close, Menu } from "@mui/icons-material";

const MainSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: "top",
    horizontal: "left",
  });
  const [snackbarTransitionState, setSnackbarTransitionState] = useState({
    open: false,
    Transition: Fade,
  });
  const [snackbarWithAlertState, setSnackbarWithAlertState] = useState(false);
  const handleOpenAlert = () => {
    setSnackbarWithAlertState((prev) => true);
  };
  const handleCloseAlert = () => {
    setSnackbarWithAlertState((prev) => false);
  };
  const { vertical, horizontal } = snackbarState;
  const handleOpenSnackbarFromList = (state) => {
    setSnackbarState((prev) => ({ ...state, open: true }));
  };
  const handleCloseSnackbarFromList = () => {
    setSnackbarState((prev) => ({ ...prev, open: false }));
  };
  const handleOpen = () => setOpen((prev) => true);
  const handleClose = (e, reason) => {
    if (reason === "clickaway") return;
    setOpen((prev) => false);
  };

  const buttonAnchorOrigin = (direction) => {
    return (
      <Button
        onClick={() =>
          handleOpenSnackbarFromList({
            vertical: direction.split("-")[0].toLowerCase(),
            horizontal: direction.split("-")[1].toLowerCase(),
          })
        }
      >
        {direction}
      </Button>
    );
  };

  const handleGrowTransition = (props) => {
    return <Grow {...props} />;
  };
  const handleSlideTransition = (props) => {
    return <Slide {...props} direction="up" />;
  };
  const handleTransitionClick = (Transition) => {
    setSnackbarTransitionState((prev) => ({
      Transition,
      open: true,
    }));
  };
  const handleTransitionClose = () => {
    setSnackbarTransitionState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const [consecutiveSnackbarState, setConsecutiveSnackbarState] =
    useState(false);
  const [consecutiveSnackbarPack, setConsecutiveSnackbarPack] = useState([]);
  const [messageInfo, setMessageInfo] = useState(undefined);
  useEffect(() => {
    if (consecutiveSnackbarPack.length && !messageInfo) {
      setMessageInfo({
        ...consecutiveSnackbarPack[0],
      });
      setConsecutiveSnackbarPack((prev) => prev.slice(1));
      setConsecutiveSnackbarState((prev) => true);
    } else if (
      consecutiveSnackbarPack.length &&
      messageInfo &&
      consecutiveSnackbarState
    ) {
      setConsecutiveSnackbarState((prev) => false);
    }
  }, [consecutiveSnackbarPack, consecutiveSnackbarState, messageInfo]);
  const handleConsecutiveSnackbarOpen = (message) => {
    setConsecutiveSnackbarPack((prev) => [
      ...prev,
      { message, key: new Date().getTime() },
    ]);
  };
  const handleConsecutiveSnackbarClose = (e, reason) => {
    if (reason === "clickaway") return;
    setConsecutiveSnackbarState((prev) => false);
  };
  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            sx={{ mr: 2 }}
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" color={"inherit"} component={"div"}>
            App bar
          </Typography>
        </Toolbar>
      </AppBar>
      <Fab
        color="secondary"
        sx={{
          position: "absolute",
          bottom: (theme) => theme.spacing(2),
          right: (theme) => theme.spacing(2),
        }}
      >
        <Add />
      </Fab>
      <Snackbar
        open
        autoHideDuration={3000}
        message="Archived"
        action={
          <Button color="inherit" size="small">
            Undo
          </Button>
        }
        sx={{ bottom: { xs: 90, sm: 10 } }}
      />
      <Stack
        p={3}
        flexWrap={"wrap"}
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"row"}
      >
        <>
          <Button onClick={handleOpen}>Open Snackbar</Button>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message="Note archived"
            action={
              <>
                <Button color="secondary" size="small" onClick={handleClose}>
                  Undo
                </Button>
                <IconButton onClick={handleClose}>
                  <Close
                    fontSize="small"
                    sx={{
                      color: "#fff",
                    }}
                  />
                </IconButton>
              </>
            }
          />
        </>
        <>
          {buttonAnchorOrigin("top-left")}
          {buttonAnchorOrigin("top-center")}
          {buttonAnchorOrigin("top-right")}
          {buttonAnchorOrigin("bottom-left")}
          {buttonAnchorOrigin("bottom-center")}
          {buttonAnchorOrigin("bottom-right")}
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={snackbarState.open}
            onClose={handleCloseSnackbarFromList}
            message="Snackbar Message..."
            key={vertical + horizontal}
            action={
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSnackbarFromList}
              >
                <Close fontSize="small" />
              </IconButton>
            }
          />
        </>

        <>
          <Button onClick={() => handleTransitionClick(handleGrowTransition)}>
            Grow Transition
          </Button>
          <Button onClick={() => handleTransitionClick(Fade)}>
            Fade Transition
          </Button>
          <Button onClick={() => handleTransitionClick(Slide)}>
            Slide Transition
          </Button>
          <Snackbar
            open={snackbarTransitionState.open}
            onClose={handleTransitionClose}
            message="Transition snackbar"
            key={snackbarTransitionState.Transition.name}
            autoHideDuration={1000}
            TransitionComponent={snackbarTransitionState.Transition}
          />
        </>

        <>
          <Button onClick={handleOpenAlert}>Open Snackbar Alert</Button>
          <Snackbar
            open={snackbarWithAlertState}
            autoHideDuration={1000}
            onClose={handleCloseAlert}
          >
            <Alert
              onClose={handleCloseAlert}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              his is a success Alert inside a Snackbar!
            </Alert>
          </Snackbar>
        </>
        <>
          <Button onClick={() => handleConsecutiveSnackbarOpen("Message A")}>
            Show message A
          </Button>
          <Button onClick={() => handleConsecutiveSnackbarOpen("Message B")}>
            Show message B
          </Button>
          <Snackbar
            key={messageInfo ? messageInfo.key : undefined}
            open={consecutiveSnackbarState}
            autoHideDuration={3000}
            onClose={handleConsecutiveSnackbarClose}
            message={messageInfo ? messageInfo.message : undefined}
            TransitionProps={{ onExited: handleExited }}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            action={
              <>
                <Button
                  color="secondary"
                  size="small"
                  onClick={handleConsecutiveSnackbarClose}
                >
                  UNDO
                </Button>
                <IconButton
                  aria-label="close"
                  color="inherit"
                  sx={{ p: 0.5 }}
                  onClick={handleConsecutiveSnackbarClose}
                >
                  <Close />
                </IconButton>
              </>
            }
          />
        </>
      </Stack>
    </>
  );
};

export default MainSnackbar;
