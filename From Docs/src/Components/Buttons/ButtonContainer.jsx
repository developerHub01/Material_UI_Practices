import { Box, Stack } from "@mui/material";
import React from "react";
import BasicButton from "./BasicButton";
import ButtonWithIcons from "./ButtonWithIcons";
import IconButtonList from "./IconButtonList";
import FileUploadButton from "./FileUploadButton";
import ButtonGroupList from "./ButtonGroupList";

const ButtonContainer = () => {
  return (
    <Stack
      direction="row"
      useFlexGap
      spacing={3}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      {/* <BasicButton /> */}
      {/* <ButtonWithIcons /> */}
      {/* <IconButtonList /> */}
      {/* <FileUploadButton /> */}
      <ButtonGroupList />
    </Stack>
  );
};

export default ButtonContainer;
