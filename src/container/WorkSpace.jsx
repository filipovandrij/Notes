import { useState } from "react";
import "./WorkSpace.scss";

const WorkSpace = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);

  const handleAddData = () => {
    setData([...data, { title, description }]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="workspace">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddData}>Add Data</button>
      {data.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkSpace;
