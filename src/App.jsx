import { useState, useEffect } from "react";
import Header from "./container/Header";
import WorkSpace from "./container/WorkSpace";
import Sidebar from "./container/Sidebar";
import Container from "@mui/material/Container";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getAllRecords } from "./IndexedDB";

import "./App.scss";

function App() {
  const [carsData, setCarsData] = useState([]);

  const [selectedCarId, setSelectedCarId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllRecords();
      setCarsData(data);
    }

    fetchData();
  }, []);

  const [selectTask, setSelectTask] = useState(Number);

  return (
    <div>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Header
          selectedCarId={selectedCarId}
          selectTask={selectTask}
          setCarsData={setCarsData}
        />
        <Container className="work-container" maxWidth="xl">
          <Sidebar
            setSelectedCarId={setSelectedCarId}
            selectedCarId={selectedCarId}
            setSelectTask={setSelectTask}
            carsData={carsData}
          />
          <WorkSpace
            carsData={carsData}
            selectTask={selectTask}
            setCarsData={setCarsData}
          />
        </Container>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
