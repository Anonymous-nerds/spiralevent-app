import React from "react";
import { NavbarMenu } from "../../mockData/data";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "../ResponsiveMenu";
import logo from "../../assets/spiraleE4.png";

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <img src={logo} alt="" className=" flex logo w-10 cursor-pointer" />
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-800 font-normal">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-primary fony-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-4 ">
            {/*BUTTON*/}
            <button
              className="hover:bg-primary font-semibold hover:text-white rounded-full 
          border-2 border-primary px-6 py-2 duration-200 hiddenmd:block"
            >
              Get started
            </button>
          </div>

          {/*Mobile section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-2xl" />
          </div>
        </div>
      </nav>

      {/*Responsive sidebar */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Nav;
