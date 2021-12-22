import "./App.css";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";
import Modal from "./components/modal";
import Registrer from "./pages/Registrer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/table" element={<Projects />}></Route>
        <Route path="/modal" element={<Modal />}></Route>
        <Route path="/registrer" element={<Registrer/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
