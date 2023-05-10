import { useState, useEffect } from "react";
import Header from "./container/Header";
import WorkSpace from "./container/WorkSpace";
import Sidebar from "./container/Sidebar";
import Container from "@mui/material/Container";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getAllRecords, addNewRecord } from "./IndexedDB";

import "./App.scss";

function App() {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllRecords();
      setCarsData(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Header />
        <Container className="work-container" maxWidth="xl">
          <Sidebar />
          <WorkSpace setCarsData={setCarsData} />
        </Container>

        <div>
          {carsData.map((car) => (
            <div key={car.id} className="new-client">
              <p>List-number: {car.id}</p>
              <p>Colour: {car.colour}</p>
              <p>Make: {car.make}</p>
            </div>
          ))}
        </div>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
