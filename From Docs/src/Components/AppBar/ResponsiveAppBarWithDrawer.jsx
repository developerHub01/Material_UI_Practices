import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const ResponsiveAppBarWithDrawer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <AppBar component={"nav"}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={"div"}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
            "& .MuiPaper-root": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component={"main"} sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          placeat, sunt perspiciatis rem accusamus mollitia incidunt possimus
          ipsam molestias iusto. Quis explicabo quaerat recusandae inventore ad
          eius, facere, nesciunt eligendi quod neque blanditiis eveniet beatae.
          Libero, vero necessitatibus provident, architecto, ab quaerat beatae
          doloremque quod debitis expedita assumenda esse nobis quas. Obcaecati,
          sit culpa. Pariatur reiciendis veritatis eos. Dolorem et illum, dicta
          amet veritatis atque. Debitis rerum a similique labore, dolore
          sapiente voluptatibus explicabo deleniti rem fuga! Rerum explicabo vel
          dolorum voluptates at aut impedit est. Distinctio odio suscipit quis
          temporibus obcaecati eaque illo, quod inventore maiores magnam
          consequuntur maxime minus exercitationem. Atque nulla saepe, quos ab
          maiores aperiam, quibusdam quasi ad quam beatae enim? Tempore aliquid
          corrupti eum aut consectetur vel deserunt excepturi esse. Tenetur qui
          accusantium, deserunt vero facere distinctio mollitia, veritatis ullam
          atque inventore iure corporis, cupiditate dolorum et eaque esse
          incidunt iste in placeat quaerat laborum assumenda omnis non ducimus.
          Deleniti dolore ratione quod enim, doloremque quis, nemo delectus
          recusandae exercitationem excepturi pariatur possimus optio, facilis
          quo veritatis vero dolorum quos saepe aspernatur consectetur. Vero,
          alias est hic, et dolorem dicta sed quas soluta incidunt aperiam
          voluptates temporibus commodi accusantium cupiditate! Hic voluptatum
          iure quaerat quos a eos, similique dignissimos dicta voluptas
          accusamus aut quasi iste odio porro maxime earum unde consequatur
          asperiores atque ex enim. Eos hic asperiores modi recusandae ipsam
          repellendus porro, atque quo eius esse! Provident quo fuga mollitia?
          Iusto, unde esse magni, obcaecati fugit perspiciatis provident
          laboriosam dolore nisi quia nihil hic atque sint odit possimus,
          eligendi nobis non. Ipsum laboriosam dignissimos officiis explicabo
          deserunt eligendi quasi asperiores quaerat quod consequuntur, quas
          culpa atque iste pariatur doloremque earum suscipit? Velit, a.
          Provident quibusdam cum quos aperiam beatae rem nulla praesentium
          necessitatibus maxime minus iste corrupti, velit dolorum amet
          consequuntur molestias numquam delectus dolorem vel quis quas odit
          illum? Nostrum suscipit, temporibus ea, optio in mollitia aperiam
          accusamus repudiandae rerum possimus asperiores assumenda sapiente
          iste placeat veniam. Beatae rem culpa dolore esse optio accusamus.
          Cumque quos cupiditate, sunt eius ad non sed. Optio non quisquam est
          architecto laudantium? Eaque veniam quaerat illo molestiae in aut
          fugit deleniti totam tempore? Vel commodi placeat, asperiores,
          molestiae eaque error quas vitae non, atque animi totam. Reiciendis
          tempore facilis nihil nobis ratione, voluptatibus assumenda nisi error
          voluptas ex excepturi iusto incidunt itaque cupiditate saepe ipsa
          recusandae possimus iste dolore molestias repellat? Dolore magnam
          architecto veritatis facilis, quidem possimus eaque necessitatibus
          vitae. Amet inventore reiciendis saepe hic adipisci accusamus velit
          rem, perferendis deserunt vel ea rerum praesentium laudantium quaerat
          nesciunt eius error temporibus libero voluptate asperiores veniam
          assumenda molestiae fuga eos. Numquam culpa ut nam rem accusamus
          sapiente expedita, cum consectetur quidem in veritatis. Dolorem nulla
          blanditiis at aperiam saepe quibusdam illum, unde error doloremque
          odit, eveniet quam! Voluptate, expedita saepe autem libero et iusto
          similique eligendi assumenda eius voluptatum repudiandae laudantium.
          Impedit non, possimus necessitatibus iste voluptates magni eum earum
          praesentium est qui ipsam odio ducimus alias unde a amet ut autem.
          Temporibus officia labore inventore veritatis?
        </Typography>
      </Box>
    </Box>
  );
};

export default ResponsiveAppBarWithDrawer;
