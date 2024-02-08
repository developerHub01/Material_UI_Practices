import { Box, Button, Card, CardActions, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

const Dot = () => {
  return (
    <Box
      component={"span"}
      sx={{
        display: "inline-block",
        mx: "2px",
        transform: "scale(0.8)",
      }}
    >
      .
    </Box>
  );
};

const BasicsCard = () => {
  return (
    <Stack display={"flex"} flexWrap={"wrap"} gap={2}>
      <Card sx={{ maxWidth: 275, width: "100%" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component={"div"}>
            be
            <Dot />
            nev
            <Dot />o<Dot />
            lent
          </Typography>
          <Typography variant="body2">
            Well meaning and kindly.
            <br />
            "a benevolent smile"
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small">Learn More</Button>
          <Button variant="outlined" size="small">Learn More</Button>
        </CardActions>
      </Card>


      <Card variant="outlined" sx={{ maxWidth: 275, width: "100%" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component={"div"}>
            be
            <Dot />
            nev
            <Dot />o<Dot />
            lent
          </Typography>
          <Typography variant="body2">
            Well meaning and kindly.
            <br />
            "a benevolent smile"
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small">Learn More</Button>
          <Button variant="outlined" size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Stack>
  );
};

export default BasicsCard;
