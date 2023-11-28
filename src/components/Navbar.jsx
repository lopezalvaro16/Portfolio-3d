import { NavLink, useLocation } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  const location = useLocation();
  return (
    <header className="header text-white">
      <NavLink to="/">
        <img src={logo} alt="logo" className="w-18 h-18 object-contain" />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Sobre Mi
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Proyectos
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
