import React from "react";
import { FaHouse, FaUserLarge, FaRegNewspaper } from "react-icons/fa6";

export default function NavElement(props) {
  let icon = null;

  if (props.icon === "home") {
    icon = <FaHouse />;
  } else if (props.icon === "user") {
    icon = <FaUserLarge />;
  } else if (props.icon === "projects") {
    icon = <FaRegNewspaper />;
  }

  return (
    <a className="navbar__element" href={props.link}>
      {icon} {props.name}
    </a>
  );
}
