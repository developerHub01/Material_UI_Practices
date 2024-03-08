import { Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";

const ContextMenu = () => {
  const [contextMenu, setContextMenu] = useState(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu((prev) =>
      prev ? null : { mouseX: e.clientX + 2, mouseY: e.clientY - 6 }
    );
  };
  const handleClose = () => {
    setContextMenu((prev) => null);
  };
  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: "context-menu" }}>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        excepturi aut architecto illum, dicta nulla, molestias nemo sapiente
        quae nobis voluptatum iure repudiandae explicabo nostrum officia
        corporis repellendus ut, neque incidunt vitae voluptatibus quaerat. A
        vero nesciunt, reiciendis itaque ullam rerum magni ipsa, enim nisi
        architecto dicta adipisci! Rem ipsa nulla laboriosam expedita animi
        cupiditate molestiae? Asperiores repellat pariatur laboriosam,
        perspiciatis illo molestias non laborum officiis neque aspernatur harum
        ea, quibusdam hic nemo repudiandae animi! Esse sequi, provident at ipsam
        autem id nesciunt doloremque officiis magni expedita nisi reprehenderit,
        quo ab vero quasi veritatis blanditiis fugit, adipisci nemo.
        Praesentium, ea recusandae! Vero voluptatibus in illo repellendus eum,
        quae, laborum quod eaque corporis repudiandae, nemo blanditiis? Eos aut
        illo hic dolorum quasi minus nemo nobis quod maiores beatae rem ad, ut
        praesentium delectus eius labore cupiditate aspernatur, corrupti
        molestiae sint, harum placeat facere quo deleniti. Cum magnam error
        inventore eligendi incidunt dolores nobis officiis quae nam quia aliquid
        saepe, autem animi ullam accusantium quaerat alias? Cupiditate, ipsa.
        Quidem ut architecto dolorum voluptates esse odit id commodi, blanditiis
        vero quo repellat laboriosam alias, quibusdam accusamus, cum eligendi
        sequi nostrum placeat animi. Ducimus minus necessitatibus consequuntur,
        fugit facere magnam corporis voluptates sit doloribus?
      </Typography>
      <Menu
        open={Boolean(contextMenu)}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleClose}>Copy</MenuItem>
        <MenuItem onClick={handleClose}>Print</MenuItem>
        <MenuItem onClick={handleClose}>Highlight</MenuItem>
        <MenuItem onClick={handleClose}>Email</MenuItem>
      </Menu>
    </div>
  );
};

export default ContextMenu;
