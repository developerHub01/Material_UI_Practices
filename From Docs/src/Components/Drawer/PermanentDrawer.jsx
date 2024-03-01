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
} from "@mui/material";
import React from "react";

const DRAWER_WIDTH = 250;

const PermanentDrawer = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${DRAWER_WIDTH}px)`,
          ml: `${DRAWER_WIDTH}px`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component={"div"}>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
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
        <Divider />
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
      </Drawer>
      <Box
        component={"main"}
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo
          dolorem eos aut sint repellendus facere laborum enim officiis
          temporibus, dicta assumenda cupiditate id, sapiente debitis et atque
          aliquid inventore, facilis omnis. Esse accusantium laboriosam
          assumenda laudantium culpa fugiat velit temporibus odit totam
          distinctio, aliquid doloribus animi eius provident tempora libero nisi
          sapiente tenetur? Obcaecati minima, iusto qui nostrum tenetur tempore
          officia iste blanditiis aspernatur aliquid fugit molestias consectetur
          esse sed sunt eaque quas provident quisquam expedita laborum illo
          quibusdam corporis, neque incidunt? Ut recusandae aspernatur
          architecto placeat, magni ullam! Recusandae expedita deleniti ipsam
          explicabo! Officia, tempora cum non nisi maiores alias iure, culpa
          optio suscipit tempore earum eius cupiditate dolore, inventore quod.
          Tenetur veniam, nihil aliquid recusandae nemo, unde saepe minus rerum
          excepturi ut quas explicabo cumque ratione architecto voluptates modi
          distinctio expedita. Similique dolorem quas illo voluptatibus
          explicabo qui necessitatibus unde voluptas blanditiis porro! Dolorum
          enim delectus fugit iure minima maxime! Quia hic voluptate, rerum
          omnis cumque sequi culpa incidunt ducimus ad accusantium quis nostrum
          odio! In voluptate minima amet dicta distinctio, ducimus, nihil
          dolorem saepe rerum delectus autem voluptas mollitia! Aperiam nemo
          dolores expedita exercitationem accusantium eligendi delectus maiores
          aliquid. Natus libero, commodi soluta eos ipsum amet.
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo
          dolorem eos aut sint repellendus facere laborum enim officiis
          temporibus, dicta assumenda cupiditate id, sapiente debitis et atque
          aliquid inventore, facilis omnis. Esse accusantium laboriosam
          assumenda laudantium culpa fugiat velit temporibus odit totam
          distinctio, aliquid doloribus animi eius provident tempora libero nisi
          sapiente tenetur? Obcaecati minima, iusto qui nostrum tenetur tempore
          officia iste blanditiis aspernatur aliquid fugit molestias consectetur
          esse sed sunt eaque quas provident quisquam expedita laborum illo
          quibusdam corporis, neque incidunt? Ut recusandae aspernatur
          architecto placeat, magni ullam! Recusandae expedita deleniti ipsam
          explicabo! Officia, tempora cum non nisi maiores alias iure, culpa
          optio suscipit tempore earum eius cupiditate dolore, inventore quod.
          Tenetur veniam, nihil aliquid recusandae nemo, unde saepe minus rerum
          excepturi ut quas explicabo cumque ratione architecto voluptates modi
          distinctio expedita. Similique dolorem quas illo voluptatibus
          explicabo qui necessitatibus unde voluptas blanditiis porro! Dolorum
          enim delectus fugit iure minima maxime! Quia hic voluptate, rerum
          omnis cumque sequi culpa incidunt ducimus ad accusantium quis nostrum
          odio! In voluptate minima amet dicta distinctio, ducimus, nihil
          dolorem saepe rerum delectus autem voluptas mollitia! Aperiam nemo
          dolores expedita exercitationem accusantium eligendi delectus maiores
          aliquid. Natus libero, commodi soluta eos ipsum amet.
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo
          dolorem eos aut sint repellendus facere laborum enim officiis
          temporibus, dicta assumenda cupiditate id, sapiente debitis et atque
          aliquid inventore, facilis omnis. Esse accusantium laboriosam
          assumenda laudantium culpa fugiat velit temporibus odit totam
          distinctio, aliquid doloribus animi eius provident tempora libero nisi
          sapiente tenetur? Obcaecati minima, iusto qui nostrum tenetur tempore
          officia iste blanditiis aspernatur aliquid fugit molestias consectetur
          esse sed sunt eaque quas provident quisquam expedita laborum illo
          quibusdam corporis, neque incidunt? Ut recusandae aspernatur
          architecto placeat, magni ullam! Recusandae expedita deleniti ipsam
          explicabo! Officia, tempora cum non nisi maiores alias iure, culpa
          optio suscipit tempore earum eius cupiditate dolore, inventore quod.
          Tenetur veniam, nihil aliquid recusandae nemo, unde saepe minus rerum
          excepturi ut quas explicabo cumque ratione architecto voluptates modi
          distinctio expedita. Similique dolorem quas illo voluptatibus
          explicabo qui necessitatibus unde voluptas blanditiis porro! Dolorum
          enim delectus fugit iure minima maxime! Quia hic voluptate, rerum
          omnis cumque sequi culpa incidunt ducimus ad accusantium quis nostrum
          odio! In voluptate minima amet dicta distinctio, ducimus, nihil
          dolorem saepe rerum delectus autem voluptas mollitia! Aperiam nemo
          dolores expedita exercitationem accusantium eligendi delectus maiores
          aliquid. Natus libero, commodi soluta eos ipsum amet.
        </Typography>
      </Box>
    </Box>
  );
};

export default PermanentDrawer;
