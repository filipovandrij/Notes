import "./WorkSpace.scss";
import { deleteRecord } from "../IndexedDB";

const WorkSpace = ({ carsData, selectTask }) => {
  const handleDelete = (value) => {
    deleteRecord(value);
  };
  return (
    <div className="workspace">
      {carsData.map(({ colour, id, make }) =>
        selectTask === id ? (
          <div key={id} className="new-task">
            <p>Title: {colour}</p>
            <p>Description: {make}</p>
          </div>
        ) : null
      )}
    </div>
  );
};

export default WorkSpace;
