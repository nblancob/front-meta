import "./App.css";
import Login from "./pages/Login";
import Tablepro from "./components/tablepro";
import { Routes, Route } from "react-router-dom";
import Modal from "./components/modal";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/table" element={<Tablepro/>}></Route>
        <Route path="/modal" element={<Modal/>}></Route>
      </Routes>
    </div>
  );
}

export default App;