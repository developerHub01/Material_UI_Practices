import React from "react";
import TemporaryDrawer from "./TemporaryDrawer";
import AnchorDrawer from "./AnchorDrawer";
import SwipeableDrawerComp from "./SwipeableDrawerComp";
import ResponsiveDrawer from "./ResponsiveDrawer";
import PersistentDrawerLeft from "./PersistentDrawerLeft";
import ClippedUnderTheAppBar from "./ClippedUnderTheAppBar";
import PermanentDrawer from "./PermanentDrawer";
import MiniVariantDrawer from "./MiniVariantDrawer";

const MainDrawer = () => {
  return (
    <>
      {/* <TemporaryDrawer /> */}
      {/* <AnchorDrawer /> */}
      {/* <SwipeableDrawerComp /> */}
      {/* <ResponsiveDrawer /> */}
      {/* <PersistentDrawerLeft /> */}
      <MiniVariantDrawer />
      {/* <PermanentDrawer /> */}
      {/* <ClippedUnderTheAppBar /> */}
    </>
  );
};

export default MainDrawer;
