import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home/Home";
import Sample from "./pages/Sample/Sample";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import EmailVerification from "./pages/EmailVerification/EmailVerification";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import AddEvent from "./pages/AddEvent/AddEvent";
import EventList from "./pages/EventList/EventList";
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
import CreateBanner from "./pages/CreateBanner/CreateBanner";
import ForgetPasswordMessage from "./pages/ForgetPasswordMessage/ForgetPasswordMessage";
import UserUpdate from "./pages/UserUpdate/UserUpdate";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App font-nunito-eb">
      <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v6.7.0/css/pro.min.css" />
      <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/sample" element={<Sample />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forget-password" element={<ForgetPassword />} />
          <Route path="/auth/forget-password/success" element={<ForgetPasswordMessage />} />
          <Route path="/auth/reset-password/:token" element={<ResetPassword />} />
          <Route path="/auth/email-verification" element={<EmailVerification />} />
          <Route path="/subscription" element={<SubscriptionPlans />} />
          <Route path="/review" element={<ReviewRatingWidget />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/createBanner" element={<CreateBanner />} />
          {/* ********************** Require Auth ********************** */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/user/update" element={<UserUpdate />} />
          <Route path="/user/profile" element={<ProfilePage />} />
          <Route path="/explore/event" element={<EventList />} />
          <Route path="/event/:eventCode" element={<PreviewEvent />} />
          <Route path="/event/view" element={<EventPage />} />
          <Route path="/event/rsvp" element={<EventRSVP />} />
          <Route path="/event/add" element={<AddEvent />} />
          <Route path="/event/edit/:eventCode" element={<EditEvent />} />
          <Route path="/event/media/:id" element={<EventMediaGallery />} />
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
