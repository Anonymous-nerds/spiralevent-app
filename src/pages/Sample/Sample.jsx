import React from "react";
import Nav from "../../components/ui/Nav.jsx";
import Footer from "../../components/ui/Footer.jsx";
import logo from "../../assets/spiraleE4.png";
import BtnPrimary from "../../components/btnPrimary.jsx";
import BtnOutline from "../../components/btnOutline.jsx";
import BtnRounded from "../../components/btnRounded.jsx";
import Card from "../../components/ui/card.jsx";
import ContactForm from "../../components/ui/contactForm.jsx";
import PIForm from "../../components/ui/PIForm.jsx";

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
        <div className="mt-5"></div>
        <Card
          logo={logo}
          title={"Spiral Event"}
          details={
            " Join us, as we Unlock the Future of AI-Driven Event Management."
          }
          date={"13th Dec 2024, 7:00 PM"}
          location={"Bayero University, Kano"}
        />
        <div className="mt-5"></div>
        <ContactForm />
        <div className="mt-5"></div>
        <PIForm />
      </div>

      <Footer />
    </div>
  );
};

export default Sample;
