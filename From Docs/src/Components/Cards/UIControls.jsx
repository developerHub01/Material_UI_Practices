import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

const UIControls = () => {
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component={"div"} variant="h5">
              Live From Space
            </Typography>
            <Typography
              component={"div"}
              variant="subtitle1"
              color="text.secondary"
            >
              Mac Miller
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton>
              <SkipPreviousIcon />
            </IconButton>
            <IconButton>
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton>
              <SkipNextIcon />
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component={"img"}
          sx={{ width: 150 }}
          image="https://mui.com/static/images/cards/live-from-space.jpg"
          alt="Music player image"
        />
      </Card>
    </Stack>
  );
};

export default UIControls;
