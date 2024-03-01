import { Inbox, Mail } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

const DRAWER_WIDTH = 250;

const ClippedUnderTheAppBar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component={"div"}>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum voluptatibus non aut maiores nobis fugiat sint debitis, sit inventore? Similique reiciendis nostrum assumenda itaque, necessitatibus qui cupiditate, unde hic nam error ad velit, aperiam odit eos et quaerat ex impedit? Possimus soluta iste facilis perferendis eos. Et, amet sunt! Dolorem suscipit molestias quasi quos officiis dolor sapiente facilis similique. Aperiam adipisci assumenda tenetur ipsum libero laborum aliquid odio dolores, reprehenderit repellendus totam dicta. Doloremque provident doloribus repellendus nesciunt ipsam officiis quibusdam inventore animi dignissimos quidem, commodi ratione, voluptate unde nostrum enim voluptatum culpa dolor molestias illum fugit deserunt et magni facilis ad? Nobis, vitae minus eaque dignissimos consequatur vel officia deleniti, sunt neque perspiciatis odio laboriosam totam iure dolores a laudantium illo, quis quam obcaecati. Dolorum numquam, impedit minus, sed earum, exercitationem ab rem fugiat velit tempore iusto repellat quo ut harum dignissimos voluptatem! Magnam adipisci fugiat ex obcaecati impedit debitis cum facilis est id, hic sunt omnis, at nam quis! Fuga, optio. Dignissimos magni ut adipisci atque cumque eaque explicabo error quam, pariatur perferendis inventore hic mollitia aut blanditiis. Doloribus, quae? Deleniti ex quas corporis odit ipsum ullam, inventore fugit id deserunt tempore sapiente saepe voluptatem nemo repellat vero.
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum voluptatibus non aut maiores nobis fugiat sint debitis, sit inventore? Similique reiciendis nostrum assumenda itaque, necessitatibus qui cupiditate, unde hic nam error ad velit, aperiam odit eos et quaerat ex impedit? Possimus soluta iste facilis perferendis eos. Et, amet sunt! Dolorem suscipit molestias quasi quos officiis dolor sapiente facilis similique. Aperiam adipisci assumenda tenetur ipsum libero laborum aliquid odio dolores, reprehenderit repellendus totam dicta. Doloremque provident doloribus repellendus nesciunt ipsam officiis quibusdam inventore animi dignissimos quidem, commodi ratione, voluptate unde nostrum enim voluptatum culpa dolor molestias illum fugit deserunt et magni facilis ad? Nobis, vitae minus eaque dignissimos consequatur vel officia deleniti, sunt neque perspiciatis odio laboriosam totam iure dolores a laudantium illo, quis quam obcaecati. Dolorum numquam, impedit minus, sed earum, exercitationem ab rem fugiat velit tempore iusto repellat quo ut harum dignissimos voluptatem! Magnam adipisci fugiat ex obcaecati impedit debitis cum facilis est id, hic sunt omnis, at nam quis! Fuga, optio. Dignissimos magni ut adipisci atque cumque eaque explicabo error quam, pariatur perferendis inventore hic mollitia aut blanditiis. Doloribus, quae? Deleniti ex quas corporis odit ipsum ullam, inventore fugit id deserunt tempore sapiente saepe voluptatem nemo repellat vero.
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum voluptatibus non aut maiores nobis fugiat sint debitis, sit inventore? Similique reiciendis nostrum assumenda itaque, necessitatibus qui cupiditate, unde hic nam error ad velit, aperiam odit eos et quaerat ex impedit? Possimus soluta iste facilis perferendis eos. Et, amet sunt! Dolorem suscipit molestias quasi quos officiis dolor sapiente facilis similique. Aperiam adipisci assumenda tenetur ipsum libero laborum aliquid odio dolores, reprehenderit repellendus totam dicta. Doloremque provident doloribus repellendus nesciunt ipsam officiis quibusdam inventore animi dignissimos quidem, commodi ratione, voluptate unde nostrum enim voluptatum culpa dolor molestias illum fugit deserunt et magni facilis ad? Nobis, vitae minus eaque dignissimos consequatur vel officia deleniti, sunt neque perspiciatis odio laboriosam totam iure dolores a laudantium illo, quis quam obcaecati. Dolorum numquam, impedit minus, sed earum, exercitationem ab rem fugiat velit tempore iusto repellat quo ut harum dignissimos voluptatem! Magnam adipisci fugiat ex obcaecati impedit debitis cum facilis est id, hic sunt omnis, at nam quis! Fuga, optio. Dignissimos magni ut adipisci atque cumque eaque explicabo error quam, pariatur perferendis inventore hic mollitia aut blanditiis. Doloribus, quae? Deleniti ex quas corporis odit ipsum ullam, inventore fugit id deserunt tempore sapiente saepe voluptatem nemo repellat vero.
        </Typography>
      </Box>
    </Box>
  );
};

export default ClippedUnderTheAppBar;
