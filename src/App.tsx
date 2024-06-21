import { FC } from "react";
import { Box } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

const App: FC = () => {
  return (
    <div className="App">
      <Box sx={{ display: "block", padding: { xs: "0px", md: "2rem" } }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </Box>
    </div>
  );
};

export default App;
