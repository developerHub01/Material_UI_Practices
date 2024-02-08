import { Button, ButtonGroup, Stack } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ButtonGroupList = () => {
  return (
    <>
      <ButtonGroup disableElevation disableRipple>
        <Button variant="contained">One</Button>
        <Button variant="text">Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="text">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" orientation="vertical">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup variant="contained">
        <Button size="small">One</Button>
        <Button size="medium">One</Button>
        <Button size="large">One</Button>
      </ButtonGroup>

      <ButtonGroup variant="contained">
        <Button>One</Button>
        <Button>Three</Button>
        <Button size="small">
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ButtonGroupList;
