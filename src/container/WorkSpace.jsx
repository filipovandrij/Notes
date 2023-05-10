import { useState } from "react";
import "./WorkSpace.scss";
import { getAllRecords, addNewRecord } from "../IndexedDB";

const WorkSpace = ({ setCarsData }) => {
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

  return (
    <div className="workspace">
      <div className="workspace__title">Добавить машину:</div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Цвет:
          <input
            type="text"
            name="colour"
            value={newCar.colour}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Марка:
          <input
            type="text"
            name="make"
            value={newCar.make}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default WorkSpace;
