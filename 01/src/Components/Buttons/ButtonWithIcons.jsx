import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const ButtonWithIcons = () => {
  return (
    <>
      <Button startIcon={<DeleteIcon />} variant="outlined">
        Delete
      </Button>
      <Button startIcon={<SendIcon />} variant="contained">
        Send
      </Button>
    </>
  );
};

export default ButtonWithIcons;
