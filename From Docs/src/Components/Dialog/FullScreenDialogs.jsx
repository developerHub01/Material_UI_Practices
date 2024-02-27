import { Close } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { forwardRef, useState } from "react";

const ringtons = [
  { title: "Title 1", subtitle: "Subtitle 1" },
  { title: "Title 2", subtitle: "Subtitle 2" },
  { title: "Title 3", subtitle: "Subtitle 3" },
  { title: "Title 4", subtitle: "Subtitle 4" },
  { title: "Title 5", subtitle: "Subtitle 5" },
  { title: "Title 6", subtitle: "Subtitle 6" },
  { title: "Title 7", subtitle: "Subtitle 7" },
  { title: "Title 8", subtitle: "Subtitle 8" },
  { title: "Title 9", subtitle: "Subtitle 9" },
  { title: "Title 10", subtitle: "Subtitle 10" },
  { title: "Title 11", subtitle: "Subtitle 11" },
  { title: "Title 12", subtitle: "Subtitle 12" },
  { title: "Title 13", subtitle: "Subtitle 13" },
  { title: "Title 14", subtitle: "Subtitle 14" },
  { title: "Title 15", subtitle: "Subtitle 15" },
];

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialogs = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        fullScreen
      >
        <AppBar sx={{ position: "sticky" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component={"div"}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          {ringtons.map(({ title, subtitle }, i) => (
            <React.Fragment key={title + (i + 1)}>
              <ListItemButton>
                <ListItemText primary={title} secondary={subtitle} />
              </ListItemButton>
              {i < ringtons.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Dialog>
    </Box>
  );
};

export default FullScreenDialogs;
