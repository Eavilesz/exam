import "./App.css";
import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";
import AddPet from "./views/AddPet";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="text-white bg-dark col-3 m-auto">Pet Shelter</h1>
        <Routes>
          <Route path="pet/" element={<Main />} />
          <Route path="pet/:id" element={<Detail />} />
          <Route path="pet/:id/edit" element={<Update />} />
          <Route path="pet/add" element={<AddPet />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
