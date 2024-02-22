import styled from "@emotion/styled";
import {
  Box,
  ButtonBase,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1a2027",
  padding: 10,
  textAlign: "center",
  color: "#fff",
}));

const GridLayout = () => {
  const [spacing, setSpacing] = useState("2");
  const handleChangeSpacing = (e) => {
    setSpacing((prev) => e.target.value);
  };
  return (
    <Stack gap={2}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={8}>
          <Item>SM = 8</Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>SM = 4</Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>SM = 4</Item>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Item>SM = 8</Item>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6} sm={4}>
          <Item>
            <Typography>SM = 4</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={8}>
          <Item>
            <Typography>SM = 8</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={8}>
          <Item>
            <Typography>SM = 8</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Item>
            <Typography>SM = 4</Typography>
          </Item>
        </Grid>
      </Grid>

      <Box p={3}>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={spacing}>
              {Array.from(Array(3)).map((item, key) => (
                <Grid key={key} item>
                  <Paper
                    sx={{
                      height: 140,
                      width: 100,
                      background: "#1a2027",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Grid container>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Spacing</FormLabel>
                    <RadioGroup
                      name="spacing"
                      aria-label="spacing"
                      row
                      value={spacing.toString()}
                      onChange={handleChangeSpacing}
                    >
                      {[0, 0.5, 1, 2, 3, 4, 8, 12].map((item) => (
                        <FormControlLabel
                          key={item}
                          value={item.toString()}
                          control={<Radio />}
                          label={item}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, key) => (
          <Grid item key={key} xs={2} sm={4} md={4}>
            <Item>{key + 1}</Item>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid>

      {/* Complex layout */}
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 500,
          flexGrow: 1,
          background: "#1a2027",
          color: "#fff",
          mb: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <img
                src="https://mui.com/static/images/grid/complex.jpg"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Standard license
                </Typography>
                <Typography gutterBottom variant="body2">
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography gutterBottom variant="body2">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                $19.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  );
};

export default GridLayout;
