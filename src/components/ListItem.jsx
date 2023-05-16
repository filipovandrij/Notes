import "./ListItem.scss";

const ListItem = ({
  setSelectedCarId,
  selectedCarId,
  carsData,
  setSelectTask,
}) => {
  const handleClick = (event) => {
    setSelectedCarId(event);
    setSelectTask(event);
  };

  console.log(carsData);

  return (
    <ul className="list-item">
      {carsData.length === 0 ? (
        <p>Create a new task</p>
      ) : (
        carsData.map((car) => (
          <li
            onClick={() => handleClick(car.id)}
            key={car.id}
            className={`new-task ${selectedCarId === car.id ? "selected" : ""}`}
          >
            <p>
              Title:{" "}
              {car.colour.length > 14
                ? car.colour.slice(0, 10) + "..."
                : car.colour}
            </p>
            <p>
              Description:{" "}
              {car.make.length > 14 ? car.make.slice(0, 14) + "..." : car.make}
            </p>
          </li>
        ))
      )}
    </ul>
  );
};

export default ListItem;
