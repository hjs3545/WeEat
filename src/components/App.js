import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SellPage from "../pages/SellPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sell" element={<SellPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
