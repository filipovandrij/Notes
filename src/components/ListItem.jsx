import "./ListItem.scss";

const ListItem = ({ carsData, setSelectTask }) => {
  const handleClick = (event) => {
    setSelectTask(event);
  };
  return (
    <ul className="list-item">
      {carsData.map((car) => (
        <li
          onClick={() => handleClick(car.id)}
          key={car.id}
          className="new-task"
        >
          <p>List-number: {car.id}</p>
          <p>Title: {car.colour}</p>
          <p>Description: {car.make}</p>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
