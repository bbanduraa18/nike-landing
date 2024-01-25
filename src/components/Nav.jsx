import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  let [open, setOpen] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="lg:flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <div
          className="lg:hidden absolute right-16 top-8 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>

        <ul
          className={`flex-1 lg:flex justify-end items-center gap-16 lg:static absolute lg:w-auto w-full left-0 lg:pl-0 padding-x transition-all duration-500 ease-in ${
            open
              ? "top-[95px] opacity-100"
              : "top-[-270px] lg:opacity-100 opacity-0"
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.label} className="lg:my-0 my-8">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
