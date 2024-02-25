import React from "react";
import "../Headers/Headers.css";
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/chat-logo.jpg";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

const Headers = () => {
  return (
    <Navbar className="navbar">
      <NavbarContent justify="start">
        <NavbarItem>
          <Link to="/" className="flex gap-2">
            <img
              src={logo}
              alt="logo"
              className="hidden sm:flex"
              width="40px"
            />
            <h1 className="sm:text-3xl text-xl">ChatApp</h1>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="navlist font-semibold hidden md:flex gap-8">
        <NavbarItem>
          <Link to="/features">Features</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/blog">Blog</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/about">About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/help">Help</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/details">Details</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="bg-green-950 px-3 py-2 rounded-3xl sm:w-1/2 text-center loginbtn font-semibold">
          <Link to="/login">
            <i className="fa-solid fa-user mr-2"></i>
            <Button name="Login" />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Headers;
