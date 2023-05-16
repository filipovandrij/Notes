import ListItem from "../components/ListItem";

const Sidebar = ({
  selectedCarId,
  setSelectedCarId,
  setSelectTask,
  carsData,
}) => {
  return (
    <div className="sidebar">
      <ListItem
        setSelectedCarId={setSelectedCarId}
        selectedCarId={selectedCarId}
        setSelectTask={setSelectTask}
        carsData={carsData}
      />
    </div>
  );
};
export default Sidebar;
