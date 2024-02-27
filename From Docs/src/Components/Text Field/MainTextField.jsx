import {
  AccountCircle,
  Directions,
  Menu,
  Search,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Stack,
  Typography,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  OutlinedInput,
  FormHelperText,
  IconButton,
  Paper,
  InputBase,
  Divider,
} from "@mui/material";
import React, { useState } from "react";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const MainTextField = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Stack width={"100%"} maxWidth={500} gap={3} p={3}>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Typography variant="h4">Basic TextField</Typography>
        <TextField id="outlined-basic" label="Outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Typography variant="h4">Form props</Typography>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue={"Hello world"}
        />
        <TextField
          id="outlined-disabled"
          disabled
          label="Disabled"
          defaultValue={"Hello world"}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="curetn-password"
        />
        <TextField
          id="outlined-read-only"
          label="Read Only"
          defaultValue={"Hello World"}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search Field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper Text"
          defaultValue={"Hello World"}
          helperText="This is helper text"
        />
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Typography variant="h4">Validation</Typography>
        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue={"Hello world"}
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helperText"
          label="Error"
          defaultValue={"Hello World"}
          variant="standard"
          helperText="Something went wrong"
        />
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Typography variant="h4">Multiline</Typography>
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue={"Default Value"}
          placeholder="Multiline placeholder"
          variant="filled"
        />
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Typography variant="h4">Select</Typography>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue={"EUR"}
          helperText="Please select currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Typography variant="h4">Icons</Typography>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            With a start adornment
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        {/* <TextField
          id="input-with-icon-textfield"
          label="TextField"
          inputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        /> */}
        <Box sx={{ display: "flex", alignItems: "end" }}>
          <AccountCircle sx={{ color: "action.active", m: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="With sx" variant="standard" />
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Typography variant="h4">Input Adornments</Typography>
        <TextField
          label="WIth normal TextField"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
        />
        <FormControl variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
          <FormHelperText id="utlined-weight-helper-text">
            Weight
          </FormHelperText>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
      <Paper
        component={"form"}
        sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
      >
        <IconButton>
          <Menu />
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Google Maps" />
        <IconButton type="button">
          <Search />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary">
          <Directions />
        </IconButton>
      </Paper>
    </Stack>
  );
};

export default MainTextField;
