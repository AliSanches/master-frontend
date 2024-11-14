import "./App.css";

import { TableJogos } from "./components/GamesSection/TableJogos";
import { Main } from "./components/Main";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div
      className="container rounded-1 shadow mt-5"
      style={{ height: "800px", background: "#0d57b9" }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/jogos" element={<TableJogos />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
