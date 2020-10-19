import React from "react";
import Link from "../components/Link";
import '../components/Todo.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="..src/index.js" className="navlink">ToDo List</a>
      <a href="../contact/index.js" className="navlink">Contact Us</a>
    </div>
  );
};

export default Navbar;

