import "./App.css";
import Login from "./pages/login";
import Sidebar from "./components/sidebar";
import Tablepro from "./components/tablepro";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/side" element={<Sidebar/>}></Route>
        <Route path="/table" element={<Tablepro/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
