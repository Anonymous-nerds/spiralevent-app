import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Button from "./components/button";
import Card from "./components/card";
import Formpage from "./components/formPage";

function App() {
  return (
    <div className="App font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button" element={<Button />} />
           <Route path="/card" element={<Card />} />
            <Route path="/form" element={<Formpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
