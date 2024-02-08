import React from "react";
import { Stack } from "@mui/material";
import AutoComplete from "./Components/AutoComplete/AutoComplete";
import ButtonContainer from "./Components/Buttons/ButtonContainer";
import MainPopper from "./Components/Popper/MainPopper";
import Transitions from "./Components/Transitions/Transitions";
import MainImageList from "./Components/ImageList/MainImageList";
import MainLink from "./Components/Link/mainLink";
import MainList from "./Components/List/MainList";
import MainDivider from "./Components/Divider/MainDivider";
import MainPaper from "./Components/Divider/MainPaper";
import MainChip from "./Components/Chip/MainChip";
import MainAvatar from "./MainAvatar";
import MainSlider from "./Components/MainSlider";

const App = () => {
  return (
    <Stack direction="column" spacing={4}>
      {/* <AutoComplete /> */}
      {/* <ButtonContainer /> */}
      {/* <MainPopper /> */}
      {/* <Transitions /> */}
      {/* <MainImageList /> */}
      {/* <MainLink /> */}
      {/* <MainList /> */}
      {/* <MainPaper /> */}
      {/* <MainChip /> */}
      {/* <MainDivider /> */}
      {/* <MainAvatar /> */}
      <MainSlider />
    </Stack>
  );
};

export default App;
