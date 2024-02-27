import { Box, Stack, Skeleton, Typography, Grid, Paper } from "@mui/material";
import React from "react";

const data = [
  {
    src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
    title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
    channel: "Don Diablo",
    views: "396k views",
    createdAt: "a week ago",
  },
  {
    src: "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
    title: "Queen - Greatest Hits",
    channel: "Queen Official",
    views: "40M views",
    createdAt: "3 years ago",
  },
  {
    src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
    title: "Calvin Harris, Sam Smith - Promises (Official Video)",
    channel: "Calvin Harris",
    views: "130M views",
    createdAt: "10 months ago",
  },
];

const Media = ({ loading }) => {
  return (
    <Grid container spacing={2} width={"100%"}>
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Grid
          item
          sm={6}
          md={4}
          key={index}
          sx={{ width: "100%", height: "100%" }}
        >
          {item ? (
            <img
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                marginBottom: "8px",
              }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={"100%"} height={180} />
          )}
          {item ? (
            <Box
              sx={{
                pr: 2,
              }}
            >
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography
                display={"block"}
                variant="caption"
                color={"text.secondary"}
              >
                {item.channel}
              </Typography>
              <Typography
                variant="caption"
                color={"text.secondary"}
              >{`${item.views} • ${item.createdAt}`}</Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width={"60%"} />
            </Box>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

const MainSkeleton = () => {
  return (
    <Stack p={4} gap={3}>
      <Box
        maxWidth={300}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        gap={1}
      >
        <Skeleton
          variant="text"
          width="100%"
          animation="pulse"
          sx={{ fontSize: "16px" }}
        />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={"100%"} height={60} />
        <Skeleton variant="rounded" width={"100%"} height={60} />
      </Box>
      <Box
        maxWidth={300}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        gap={1}
      >
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
      <Box
        sx={{
          overflow: "hidden",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Media loading />
        <Media />
      </Box>
    </Stack>
  );
};

export default MainSkeleton;
