import styled from "@emotion/styled";
import {
  Avatar,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { cloneElement, useState } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

const darkColor = "#212121";
const whiteColor = "#fff";
const grayColor = "#ddd";

const generate = (element) => {
  return [0, 1, 2].map((item) =>
    cloneElement(element, {
      key: item,
    })
  );
};

const Interactive = () => {
  const [denseState, setDenseState] = useState(false);
  const [secondaryState, setSecondaryState] = useState(false);
  return (
    <Stack gap={2}>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={denseState}
              onChange={(e) => setDenseState((prev) => e.target.checked)}
            />
          }
          label="Enable dense"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={secondaryState}
              onChange={(e) => setSecondaryState((prev) => e.target.checked)}
            />
          }
          label="Enable secondary text"
        />
      </FormGroup>
      <Stack gap={4} direction="row" flexWrap="wrap">
        <Stack direction="column">
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6">
            Text Only
          </Typography>
          <List
            sx={{
              width: "100%",
              maxWidth: 350,
              background: darkColor,
              color: whiteColor,
            }}
          >
            {generate(
              <ListItem dense={denseState}>
                <ListItemText
                  primary="Single line item"
                  secondary={secondaryState && "Secondary text"}
                />
              </ListItem>
            )}
          </List>
        </Stack>
        <Stack>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6">
            Icon with text
          </Typography>
          <List
            dense={denseState}
            sx={{
              width: "100%",
              maxWidth: 400,
              background: darkColor,
              color: whiteColor,
            }}
          >
            {generate(
              <ListItem>
                <ListItemIcon>
                  <FolderIcon sx={{ color: whiteColor }} />
                </ListItemIcon>
                <ListItemText
                  primary="SIngle line item"
                  secondary={secondaryState && "Secondary text"}
                />
              </ListItem>
            )}
          </List>
        </Stack>

        <Stack>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6">
            Avatar with text
          </Typography>
          <List
            dense={denseState}
            sx={{
              width: "100%",
              maxWidth: 400,
              background: darkColor,
              color: whiteColor,
            }}
          >
            {generate(
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon sx={{ color: whiteColor }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="SIngle line text"
                  secondary={secondaryState && "Secondary text"}
                />
              </ListItem>
            )}
          </List>
        </Stack>

        <Stack>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6">
            Avatar with text and icon
          </Typography>
          <List
            dense={denseState}
            sx={{
              width: "100%",
              maxWidth: 500,
              background: darkColor,
              color: whiteColor,
            }}
          >
            {generate(
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon sx={{ color: whiteColor }} />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon sx={{ color: darkColor }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Single line item"
                  secondary={secondaryState && "Secondary text"}
                />
              </ListItem>
            )}
          </List>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Interactive;
