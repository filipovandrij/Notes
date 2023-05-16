import "./WorkSpace.scss";
import { updateRecord } from "../IndexedDB";

import TextField from "@mui/material/TextField";

const WorkSpace = ({ carsData, selectTask }) => {
  const handleInputChange = (event, car) => {
    const { name, value } = event.target;
    const updatedCar = { ...car, [name]: value };
    updateRecord(updatedCar)
      .then(() => {
        console.log("Запись успешно обновлена");
      })
      .catch((error) => {
        console.error("Ошибка при обновлении записи", error);
      });
  };

  return (
    <div className="workspace">
      {carsData.map(({ colour, id, make }) =>
        selectTask === id ? (
          <div key={id} className="new-task">
            <TextField
              className="title"
              label="Title"
              multiline
              rows={1}
              name="colour"
              defaultValue={colour}
              variant="standard"
              onChange={(event) =>
                handleInputChange(event, { colour, id, make })
              }
            />
            <TextField
              label="Description"
              className="description"
              multiline
              name="make"
              rows={20}
              defaultValue={make}
              onChange={(event) =>
                handleInputChange(event, { colour, id, make })
              }
            />
          </div>
        ) : null
      )}
    </div>
  );
};

export default WorkSpace;
