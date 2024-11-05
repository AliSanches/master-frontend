import "./App.css";

import { ModalCreateCategory } from "./components/Categories/Modal-Create-Category";
import { TableCategory } from "./components/Table-Categories/Table-Categories";
import { ModalSearch } from "./components/Categories/Modal-Search";

function App() {
  return (
    <div
      className="container rounded-1 shadow mt-5"
      style={{ height: "800px", background: "#0d57b9" }}
    >
      <div className="container d-flex gap-5">
        <ModalCreateCategory />
        <ModalSearch />
      </div>
      <TableCategory />
    </div>
  );
}

export default App;
