import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

const darkColor = "#212121";
const whiteColor = "#fff";
const grayColor = "#ddd";

const FolderList = () => {
  return (
    <List
      sx={{
        background: darkColor,
        color: whiteColor,
        width: "100%",
        maxWidth: 300,
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon sx={{ color: darkColor }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
        primary="Photos" 
        secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon sx={{ color: darkColor }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
        primary="Work" 
        secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon sx={{ color: darkColor }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
        primary="Vacation" 
        secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
};

export default FolderList;
