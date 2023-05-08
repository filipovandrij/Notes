import Header from "./container/Header";
import WorkSpace from "./container/WorkSpace";
import Sidebar from "./container/Sidebar";
import Container from "@mui/material/Container";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getAllRecords from "./IndexedDB";
import "./App.scss";

function App() {
  console.log(getAllRecords);
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Header />
        <Container className="work-container" maxWidth="xl">
          <Sidebar />
          <WorkSpace />
        </Container>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
