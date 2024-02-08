import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const WithMedia = () => {
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
      <Box>
        <Typography variant="h3">Media as background image</Typography>
        <Typography paragraph>Then no need to use component props</Typography>
        <Card sx={{ width: "100%", maxWidth: 350 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>

      <Box>
        <Typography variant="h3">Media as image</Typography>
        <Typography paragraph>Then need to use component props</Typography>

        <Card sx={{ width: "100%", maxWidth: 350 }}>
          <CardMedia
            component={"img"}
            sx={{ height: 140 }}
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </Stack>
  );
};

export default WithMedia;
