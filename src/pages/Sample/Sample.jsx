import React from "react";
import Nav from "../../components/ui/Nav.jsx";
import Footer from "../../components/ui/Footer.jsx";
import BtnPrimary from "../../components/btnPrimary.jsx";
import BtnOutline from "../../components/btnOutline.jsx";
import BtnRounded from "../../components/btnRounded.jsx";

const Sample = () => {
  return (
    <div>
      <Nav />
      <div className="m-5">
        <BtnPrimary text={"Primary"} />
        <div className="mt-5"></div>
        <BtnOutline text={"Outline"} />
        <div className="mt-5"></div>
        <BtnRounded text={"Rounded"} />
      </div>

      <Footer />
    </div>
  );
};

export default Sample;
