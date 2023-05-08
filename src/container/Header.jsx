import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Header.scss";

const Header = () => {
  return (
    <Box className="header" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <div className="active-buttons">
            <IconButton size="large" color="inherit">
              <AddIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              <DeleteIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              <EditNoteIcon />
            </IconButton>
          </div>
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <button type="submit">Find</button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
