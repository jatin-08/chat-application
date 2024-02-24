import React from "react";
import "../Headers/Headers.css";
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/chat-logo.jpg";

const Headers = () => {
  return (
    <nav className="navbar flex justify-around items-center p-2">
      <div>
        <Link to="/" className="flex gap-2">
          <img src={logo} alt="logo" width="40px" />
          <h1 className="text-3xl">ChatApp</h1>
        </Link>
      </div>
      <div>
        <ul className="flex gap-10 navlist">
          <li className="">
            <NavLink to="/features">Features</NavLink>
          </li>
          <li>
            <NavLink to="/Blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/Help">Help</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Detials">Detials</NavLink>
          </li>
        </ul>
      </div>
      <div className="bg-green-950 px-3 py-2 rounded-xl w-30 loginbtn font-semibold">
        <Link to="/login">
          <i className="fa-solid fa-user mr-2"></i>
          <Button name="Login" />
        </Link>
      </div>
    </nav>
  );
};

export default Headers;
