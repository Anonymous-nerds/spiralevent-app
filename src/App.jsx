import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sample from "./pages/Sample/Sample";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import EmailVer from "./pages/EmailVer/EmailVer";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import AddEvent from "./pages/AddEvent/AddEvent";
import EditEvent from "./pages/EditEvent/EditEvent";
import PreviewEvent from "./pages/PreviewEvent/PreviewEvent";

function App() {
  return (
    <div className="App font-nunito-eb">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/email-ver" element={<EmailVer />} />
          <Route path="/preview" element={<PreviewEvent />} />
          {/* require auth */}
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/addEvent" element={<AddEvent />} />
          <Route path="/editEvent" element={<EditEvent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
