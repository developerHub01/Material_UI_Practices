import React from "react";
import BasicDialog from "./BasicDialog";
import { Stack } from "@mui/material";
import Alerts from "./Alerts";
import Transitions from "./Transitions";
import FormDialogs from "./FormDialogs";
import Customization from "./Customization";
import FullScreenDialogs from "./FullScreenDialogs";
import OptionalSizes from "./OptionalSizes";
import ResponsiveFullScreen from "./ResponsiveFullScreen";
import ConfirmationDialogs from "./ConfirmationDialogs";
import NonModalDialog from "./NonModalDialog";
import ScrollingLongContent from "./ScrollingLongContent";

const MainDialog = () => {
  return (
    <Stack
      minHeight={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      p={3}
    >
      <BasicDialog />
      <Alerts />
      <Transitions />
      <FormDialogs />
      <Customization />
      <FullScreenDialogs />
      <OptionalSizes />
      <ResponsiveFullScreen />
      <ConfirmationDialogs />
      <NonModalDialog />
      <ScrollingLongContent />
    </Stack>
  );
};

export default MainDialog;
