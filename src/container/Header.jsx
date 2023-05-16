import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { deleteRecord, getAllRecords, addNewRecord } from "../IndexedDB";
import "./Header.scss";

const Header = ({ selectedCarId, selectTask, setCarsData }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [newCar, setNewCar] = useState({
    colour: "",
    make: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    addNewRecord({ ...newCar, id: Date.now() })
      .then(() => {
        console.log("New task successfully added to IndexedDB");
        getAllRecords().then((cars) => {
          setCarsData(cars);
        });
      })
      .catch((error) => {
        console.error("Error while adding new task to IndexedDB: ", error);
      });
    setNewCar({
      colour: "",
      make: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleDelete = (value) => {
    deleteRecord(value);
  };

  const isAnyCarSelected = selectedCarId !== null;

  return (
    <>
      <Box className="header" sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="toolbar">
            <div className="active-buttons">
              <IconButton
                onClick={handleClickOpen}
                size="large"
                color="inherit"
              >
                <AddIcon />
              </IconButton>
              <IconButton
                disabled={!isAnyCarSelected}
                onClick={() => {
                  handleDelete(selectTask);
                  window.location.reload();
                }}
                size="large"
                color="inherit"
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                disabled={!isAnyCarSelected}
                size="large"
                color="inherit"
                onClick={() => window.location.reload()}
              >
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
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleFormSubmit}>
          <DialogTitle>Create New Task</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Think of a title for the post and describe it.
            </DialogContentText>
            <div>
              <TextField
                className="title"
                label="Title:"
                multiline
                rows={1}
                name="colour"
                defaultValue={newCar.colour}
                variant="standard"
                onChange={handleInputChange}
              />
              <TextField
                className="description"
                label="Description:"
                multiline
                rows={6}
                name="make"
                defaultValue={newCar.make}
                onChange={handleInputChange}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              onSubmit={handleFormSubmit}
              color="error"
            >
              Cancel
            </Button>
            <Button type="submit" onClick={handleClose} color="success">
              Create
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
export default Header;
