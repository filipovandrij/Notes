import ListItem from "../components/ListItem";

const Sidebar = ({ setSelectTask, carsData }) => {
  return (
    <div className="sidebar">
      <ListItem setSelectTask={setSelectTask} carsData={carsData} />
    </div>
  );
};
export default Sidebar;
