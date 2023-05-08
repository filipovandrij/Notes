import Header from "./container/Header";
import ListItem from "./container/ListItem";
import Sidebar from "./container/Sidebar";

import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Header />
        <ListItem />
        <Sidebar />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
