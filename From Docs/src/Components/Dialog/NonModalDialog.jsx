import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Fade,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Typography,
  Unstable_TrapFocus,
} from "@mui/material";
import React, { useState } from "react";

const NonModalDialog = () => {
  const [bannerOpen, setBannerOpen] = useState(true);

  const closeBanner = () => {
    setBannerOpen(false);
  };

  return (
    <Paper>
      <Box position={"relative"}>
        <CssBaseline />
        <AppBar position="sticky" component={"nav"}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <Menu />
            </IconButton>
            <Typography variant="h5" fontWeight={"bold"}>
              Logo
            </Typography>
          </Toolbar>
        </AppBar>
        <Container
          component={"main"}
          sx={{ pt: 3, overflowY: "auto", height: "400px" }}
        >
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet.
          </Typography>
        </Container>
        <Unstable_TrapFocus open disableAutoFocus disableEnforceFocus>
          <Fade appear={false} in={bannerOpen}>
            <Paper
              role="dialog"
              aira-model="false"
              aria-label="Cookie banner"
              square
              variant="outlined"
              tabIndex={-1}
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                m: 0,
                p: 2,
                borderWidth: 0,
                borderTopWidth: 1,
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={2}
              >
                <Box
                  sx={{
                    flexShrink: 1,
                    alignSelf: { xs: "flex-start", sm: "center" },
                  }}
                >
                  <Typography fontWeight="bold">
                    This website uses cookies
                  </Typography>
                  <Typography variant="body2">
                    example.com relies on cookies to improve your experience.
                  </Typography>
                </Box>
                <Stack
                  gap={2}
                  direction={{
                    xs: "row-reverse",
                    sm: "row",
                  }}
                  sx={{
                    flexShrink: 0,
                    alignSelf: { xs: "flex-end", sm: "center" },
                  }}
                >
                  <Button
                    size="small"
                    onClick={closeBanner}
                    variant="contained"
                  >
                    Allow all
                  </Button>
                  <Button size="small" onClick={closeBanner}>
                    Reject all
                  </Button>
                </Stack>
              </Stack>
            </Paper>
          </Fade>
        </Unstable_TrapFocus>
      </Box>
    </Paper>
  );
};

export default NonModalDialog;
