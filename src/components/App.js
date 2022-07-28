import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header"
import HomePage from "../pages/HomePage";
import SellPage from "../pages/SellPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/sell" element={<SellPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
