import "./WorkSpace.scss";

const WorkSpace = ({ carsData, selectTask }) => {
  return (
    <div className="workspace">
      {carsData.map(({ colour, id, make }) =>
        selectTask === id ? (
          <div key={id} className="new-task">
            <p>Task-Number: {id}</p>
            <p>Title: {colour}</p>
            <p>Description: {make}</p>
          </div>
        ) : null
      )}
    </div>
  );
};

export default WorkSpace;
