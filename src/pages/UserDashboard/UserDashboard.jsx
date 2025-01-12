import React from "react";
import DarkNav from "../../components/ui/DarkNav.jsx";
import Dash_Cont from "../../components/ui/dashboard_content.jsx";
const UserDashboard = () => {
  let inLineStyle = {
      backgroundColor : "#d9d9d9"
  }; 
  return (
    <div style = {inLineStyle}>
      <DarkNav />
      <Dash_Cont />
    </div>
  );
};

export default UserDashboard;
