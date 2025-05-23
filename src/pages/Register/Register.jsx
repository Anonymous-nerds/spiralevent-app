// import React from "react";
import heroimg from "../../assets/register.svg";
import RegisterForm from "../../components/ui/RegisterForm";

const Register = () => {
  return (
    <div className="h-screen w-full flex flex-col lg:flex-row">
      <div className="w-full h-screen lg:w-1/2 p-6 md:p-12 bg-neutral-100 flex items-center justify-center">
        <div className="w-full max-w-md">
          <RegisterForm />
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 h-screen">
        <img src={heroimg} alt="Event" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Register;
