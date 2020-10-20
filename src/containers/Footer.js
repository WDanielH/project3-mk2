import React from "react";
import Link from "../components/Link";
//import '../components/Todo.css';

const Footer = () => {
  return (
    <div>
      <Link filter={"SHOW_ALL"}>All</Link>
      <Link filter={"SHOW_ACTIVE"}>Active</Link>
      <Link filter={"SHOW_COMPLETE"}>Complete</Link>
    </div>
  );
};

export default Footer;

