/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../data";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav_container">
        {/* navbar logo */}
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>

        {/* navbar ul li links */}
        <ul className={`nav_links ${isNavShowing ? "show_nav" : "hide_nav"}`}>
          {links.map(({ name, path }, index) => {
            // console.log(name, path, index);
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>

                {/* <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/plans">Plans</NavLink>
            <NavLink to="/trainers">Trainers</NavLink> */}
              </li>
            );
          })}
        </ul>

        {/* navbar three line button */}
        <button
          className="nav_toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
