// Render the navigation menu using array map
import React, {useState} from "react";
import { NavLink } from "react-router-dom";

function Nav() {

  // Define an array of menu items
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Menu", link: "/menu" },
    { label: "Reservations", link: "/reservations" },
    { label: "Order Online", link: "/order" },
    { label: "Login", link: "/login" },
  ];
  
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="nav">
      <ul className={`nav-list ${open ? "open" : ""}`}>
        {menuItems.map((item) => (
          <li className="nav-link" key={item.link}>
            <NavLink to={item.link}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
      <div className={`hamburger ${open ? "open" : ""}`} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );


}

export default Nav;

