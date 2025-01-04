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
import Orders from "./pages/Orders/Orders";
import TicketConfirmation from "./pages/TicketConfirmation/TicketConfirmation";
import EventPage from "./pages/Event/Event";
import EventRSVP from "./pages/EventRSVP/EventRSVP";
import Ticket from "./pages/Ticket/Ticket";
import FeedbackForm from "./pages/Feedback/Feedback";
import EventMediaGallery from "./pages/EventMedia/EventMedia";
import SubscriptionPlans from "./pages/Subscription/Subscription";
import ReviewRatingWidget from "./pages/ReviewRatingWidget/ReviewRatingWidget";
import EventReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import PaymentForm from "./pages/Payment/Payment";
import Gallery from "./pages/Gallery/Gallery"

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
          <Route path="/event/preview" element={<PreviewEvent />} />
          <Route path="/subscription" element={<SubscriptionPlans />} />
          <Route path="/review" element={<ReviewRatingWidget />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* *********** require auth *********** */}
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/event/rsvp" element={<EventRSVP />} />
          <Route path="/event/add" element={<AddEvent />} />
          <Route path="/event/edit" element={<EditEvent />} />
          <Route path="/event/media" element={<EventMediaGallery />} />
          <Route path="/event/review" element={<EventReviewsPage />} />
          <Route path="/orders/:id" element={<Orders />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/ticket/confirmation" element={<TicketConfirmation />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
