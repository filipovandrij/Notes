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

import { deleteRecord, getAllRecords, addNewRecord } from "../IndexedDB";
import "./Header.scss";

const Header = ({ selectTask, setCarsData }) => {
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

    // Добавьте новую машину в IndexedDB
    addNewRecord({ ...newCar, id: Date.now() })
      .then(() => {
        console.log("Новая машина успешно добавлена в IndexedDB");
        // обновляем список машин, чтобы отобразить добавленную машину
        getAllRecords().then((cars) => {
          setCarsData(cars);
        });
      })
      .catch((error) => {
        console.error(
          "Ошибка при добавлении новой машины в IndexedDB: ",
          error
        );
      });

    // Очищаем состояние новой машины
    setNewCar({
      colour: "",
      make: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Обновляем состояние новой машины
    setNewCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleDelete = (value) => {
    deleteRecord(value);
  };

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
                onClick={() => handleDelete(selectTask)}
                size="large"
                color="inherit"
              >
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
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleFormSubmit}>
          <DialogTitle>Create New Task</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Think of a title for the post and describe it.
            </DialogContentText>
            <div>
              <label>
                Title:
                <input
                  type="text"
                  name="colour"
                  value={newCar.colour}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  name="make"
                  value={newCar.make}
                  onChange={handleInputChange}
                />
              </label>
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
