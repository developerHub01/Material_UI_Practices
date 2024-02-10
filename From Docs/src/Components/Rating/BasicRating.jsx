import { Box, Rating, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const hoverLabels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const BasicRating = () => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  return (
    <Stack
      gap={2}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
    >
      <Box gap={1}>
        <Typography variant="h3" gutterBottom>
          Basic rating
        </Typography>
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(_, newValue) => setValue((prev) => newValue)}
        />
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" vlaue={value} readOnly />
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" vlaue={value} disabled />
        <Typography component="legend">No rating given</Typography>
        <Rating name="disabled" vlaue={null} />
      </Box>

      <Box gap={1}>
        <Typography variant="h3" gutterBottom>
          Rating precision
        </Typography>
        <Rating name="half-rating" defaultValue={2.5} precision={0.1} />
        <br />
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        <br />
        <Rating
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
      </Box>

      <Box gap={1}>
        <Typography variant="h3" gutterBottom>
          Hover Feedback
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          {value !== null && (
            <Typography>{hoverLabels[hover === -1 ? value : hover]}</Typography>
          )}
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            size="large"
            onChange={(_, newValue) => setValue((prev) => newValue)}
            onChangeActive={(_, newValue) => setHover((prev) => newValue)}
          />
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
      >
        <Rating name="size-small" defaultValue={2} size="small" />
        <br />
        <Rating name="size-medium" defaultValue={2} />
        <br />
        <Rating name="size-large" defaultValue={2} size="large" />
      </Box>

      <Box>
        <Typography variant="h3" gutterBottom>
          N-numbers of rating
        </Typography>
        <Rating
          name="customized-10"
          defaultValue={3}
          max={10}
          onChange={(_, newValue) => console.log(newValue)}
        />
      </Box>

      <Box>
        <Typography variant="h3" gutterBottom>
          Custom Icon
        </Typography>
        <Rating
          name="customized-10"
          defaultValue={3}
          precision={0.5}
          onChange={(_, newValue) => console.log(newValue)}
          icon={<FavoriteIcon />}
          emptyIcon={<FavoriteBorderIcon />}
          sx={{
            "& .MuiRating-iconFilled": {
              color: "#e5383b",
            },
            "& .MuiRating-iconHover": {
              color: "#d90429",
            },
          }}
        />
      </Box>
    </Stack>
  );
};

export default BasicRating;
