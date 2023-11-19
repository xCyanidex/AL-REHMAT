import React from 'react'
import logo from "../../assets/logos.png"
import { Link,NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 scroll-m-3 fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
         
                activeClassName="active"
                className="font-bold "
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="font-bold"
                to="/about"
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="font-bold"
                to="/projects"
              >
                PROJECTS
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="font-bold"
                to="/registration"
              >
                DEALERS REGISTRATION
              </NavLink>
            </li>

            <li>
              <NavLink
                activeClassName="active"
                className="font-bold"
                to="/contact"
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="">
          <img
            width={96}
            className="  md:w-96 sm:w-64"
            src={logo}
            alt="Al-Rehmat Developers"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink activeClassName="active" className="font-bold " to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" className="font-bold" to="/about">
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="font-bold"
              to="/projects"
            >
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="font-bold"
              to="/registration"
            >
              DEALERS REGISTRATION
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="font-bold"
              to="/contact"
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink
          activeClassName="active"
          to="/contact"
          className="btn font-bold"
        >
          MEET US
        </NavLink>
      </div>
    </div>
  );
}
export default Navbar;