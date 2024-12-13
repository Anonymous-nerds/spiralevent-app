import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Button from "./components/button";

function App() {
  return (
    <div className="App font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button" element={<Button />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
