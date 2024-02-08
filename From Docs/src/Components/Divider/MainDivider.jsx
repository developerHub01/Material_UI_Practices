import {
  Box,
  Card,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import React from "react";

const firstListData = [
  "Full width variant below",
  "Inset variant below",
  "Middle variant below",
  "List item",
];

const MainDivider = () => {
  return (
    <Stack gap={3}>
      <Box>
        <Card variant="outlined" sx={{ maxWidth: 360 }}>
          <Box sx={{ p: 2 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography gutterBottom variant="h5" component="div">
                Toothbrush
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                $4.50
              </Typography>
            </Stack>
            <Typography gutterBottom variant="body2" component="div">
              Pinstriped cornflower blue cotton blouse takes you on a walk to
              the park or just down the hall.
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              p: 2,
            }}
          >
            <Typography gutterBottom variant="body2">
              Select Type
            </Typography>
            <Stack direction="row" gap={1}>
              <Chip color="primary" label="Soft" size="small" />
              <Chip label="medium" size="small" />
              <Chip label="Hard" size="small" />
            </Stack>
          </Box>
        </Card>
      </Box>

      <List
        sx={{
          py: 0,
          width: "100%",
          maxWidth: 360,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
        }}
      >
        {firstListData.map((item, i) => (
          <React.Fragment key={i}>
            <ListItem>
              <ListItemText primary={item} />
            </ListItem>
            {i < firstListData.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>

      <Box
        display="flex"
        flexDirection="row"
        gap={1}
        justifyContent="center"
        alignItems="center"
      >
        <FormatAlignLeftIcon />
        <FormatAlignCenterIcon />
        <FormatAlignRightIcon />
        <Divider orientation="vertical" flexItem />
        <FormatBoldIcon />
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        gap={1}
        justifyContent="center"
        alignItems="center"
      >
        <FormatBoldIcon />
        <Divider
          orientation="vertical"
          // variant="middle"
          variant="fullWidth"
          flexItem
        />
        <FormatItalicIcon />
      </Box>

      <Card variant="outlined" sx={{ maxWidth: 600 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textAlign: "center",
            p: 2,
          }}
        >
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Divider textAlign="left">
            <Typography variant="body2" component="span">
              LEFT
            </Typography>
          </Divider>

          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Divider textAlign="center">
            <Typography variant="body2" component="span">
              CENTER
            </Typography>
          </Divider>

          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Divider textAlign="right">
            <Typography variant="body2" component="span">
              RIGHT
            </Typography>
          </Divider>

          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Divider>
            <Chip label="Chip" size="small" />
          </Divider>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Box>
      </Card>
    </Stack>
  );
};

export default MainDivider;
